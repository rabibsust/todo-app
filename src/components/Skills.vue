<template>
  <div class="skills">
    <h1>{{ name }}</h1>
    <div class="holder">
        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter a skill you have" v-model="skill" v-validate="'min:5'" name="skill">
            <transition name="alert-in" enter-active-class="animated fadeInUp" leave-active-class="animated fadeInDown">
                <span class="alert" v-show="errors.has('skill')">{{ errors.first('skill') }}</span>
            </transition>
        </form>
       
        <ul>
            <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
                <li v-for="(data, index) in skills" :key='index'>
                    {{ data.skill }}
                    <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
                </li>
            </transition-group>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
      return {
          name: 'My Skills',
          skill: '',
          skills: [
              { "skill": "Vue.JS" },
              { "skill": "Laravel" }
          ],
      }
  },
    // Add this section:
  methods : {
      addSkill(){
          this.$validator.validateAll().then((result) => {
              if(result) {
                  this.skills.push({skill: this.skill});
                  this.skill = '';
              }
              else {
                 // console.log('Not Valid');
              }
          })
          
      },
      remove(id) {
        this.skills.splice(id, 1);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/style.css" scoped>
</style>
