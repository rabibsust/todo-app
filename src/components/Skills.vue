<template>
  <div class="skills">
    <h1>{{ name }}</h1>
    <div class="holder">
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
          name: 'Rabib',
          btnState: true,
          skills: [
              { "skill": "Vue.JS" },
              { "skill": "Laravel" }
          ],
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/style.css" scoped>
</style>
