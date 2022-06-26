<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <InsurancePolicyHome v-bind:client="client" />
  </div>
</template>

<script>

import InsurancePolicyHome from './components/InsurancePolicyHome.vue'
import Client from './models/Client.js'

export default {
  name: 'App',
  components: {
    InsurancePolicyHome
  },
  data() {
    return {
      client: new Client()
    }
  },
  mounted() {
    fetch("./achme-broker.json")
      .then(res => res.json())
      .then(data => {
        this.client.name = data.client.name;
        this.client.policies = data.client.policies;
      });
  }


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
