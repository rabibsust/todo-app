<template>
  <div class="skills">
    <h1>{{ name }}</h1>
    <!--  {{ btnState ? 'The button is disabed' : 'The button is active' }}
    <button v-on:click="changeName" v-bind:disabled="btnState">Change Name</button>-->
    <div class="holder">
        <ul>
            <li v-for="(data, index) in skills" :key='index'>{{ index }}. {{ data.skill }}</li>
        </ul>
        <div v-bind:class="alertObject"></div>
        <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"></div>
    </div>
      
<!--      <p v-if="skills.length >= 1">You have more than one skill</p>
      <p v-else>You have less than or equal to one skill</p>-->
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
          alertObject: {
            alert: true,
          },
          bgColor: 'yellow',
          bgWidth: '100%',
          bgHeight: '30px'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../public/style.css" scoped>
</style>
