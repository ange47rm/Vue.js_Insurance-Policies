<template>
  <v-app>
    <v-app-bar app color="amber darken-3" dark>
      <h1>Insurance Policies - Broker Insights</h1>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <InsurancePolicyHome v-bind:client="client" />
    </v-main>
  </v-app>
</template>

<script>
import InsurancePolicyHome from './components/InsurancePolicyHome.vue';
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
};
</script>

<style scoped>
body {
  text-align: center !important;
}
</style>