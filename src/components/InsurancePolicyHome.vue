<template>
  <div>
      <v-data-table :headers="headers" :items="client.policies" item-key="premium" class="elevation-1" :search="search"
        :custom-filter="filterOnlyCapsText">
        <template v-slot:top>
          <v-text-field v-model="search" label="Search" class="mx-4"></v-text-field>
        </template>
      </v-data-table>
  </div>
</template>

<script>
import Client from '@/models/Client';

export default {
  name: 'InsurancePolicyHome',
  props: {
    client: Client
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    headers() {
      return [
        { text: 'Customer Name', align: 'start', sortable: true, value: 'customer_name', },
        { text: 'Customer Address', value: 'customer_address' },
        { text: 'Premium (£)', value: 'premium' },
        { text: 'Policy Type', value: 'policy_type' },
        { text: 'Insurer Name', value: 'insurer_name' },
      ]
    },
  },
  methods: {
    filterOnlyCapsText(value, search) {
      if (search) {
        search = search.toLocaleLowerCase();
      }

      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().toLocaleLowerCase().indexOf(search) !== -1
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
