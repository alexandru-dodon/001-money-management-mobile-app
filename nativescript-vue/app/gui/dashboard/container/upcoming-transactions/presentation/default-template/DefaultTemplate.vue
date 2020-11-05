<template>
  <Layout class="default-template">
    <template slot="transactions">
      <TransactionList :transactions="transactions" />
    </template>
  </Layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import Layout from "./Layout.vue";

import TransactionList from "../transaction-list/TransactionList.vue";

@Component({
  components: {
    Layout,
    TransactionList
  }
})
export default class DefaultTemplate extends Vue {
  @Prop(Array) private transactions!: any[];
}
</script>
