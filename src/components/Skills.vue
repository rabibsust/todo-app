<template>
  <div class="skills">
    <h1>{{ name }}</h1>
    <div class="holder">
        <form @submit.prevent="addSkill">
            <input type="text" placeholder="Enter a skill you have" v-model="skill">
        </form>
        {{ skill }}
        <ul>
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
          this.skills.push({skill: this.skill});
          this.skill = '';
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/style.css" scoped>
</style>
