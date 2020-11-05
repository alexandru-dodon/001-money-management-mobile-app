<template>
  <CoverLayout class="default-template">
    <template slot="background">
      <Background />
    </template>

    <template slot="foreground">
      <Layout>
        <template slot="balance">
          <MyBalanceContainer />
        </template>

        <template slot="actions">
          <AccountActionsContainer />
        </template>

        <template slot="upcoming">
          <UpcomingTransactionsContainer />
        </template>
      </Layout>
    </template>
  </CoverLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { AccountActionsContainer } from "../container/account-actions";
import { MyBalanceContainer } from "../container/my-balance";
import { UpcomingTransactionsContainer } from "../container/upcoming-transactions";

import Background from "./Background.vue";
import Layout from "./Layout.vue";

@Component({
  components: {
    Background,
    Layout,
    AccountActionsContainer,
    MyBalanceContainer,
    UpcomingTransactionsContainer
  }
})
export default class DefaultTemplate extends Vue {}
</script>
