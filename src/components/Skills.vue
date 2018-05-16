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
            <transition-group name="lists" enter-active-class="animated bounceInUp" leave-active-class="animated bounceInDown"></transition-group>
            <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}</li>
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
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/style.css" scoped>
</style>
