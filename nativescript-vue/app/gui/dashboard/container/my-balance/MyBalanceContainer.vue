<template>
  <DefaultTemplate class="my-balance-container" :balance="balance" @top-up-tapped="onTopUpTapped" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DefaultTemplate from "./presentation/default-template/DefaultTemplate.vue";

@Component({
  components: {
    DefaultTemplate
  }
})
export default class MyBalanceContainer extends Vue {
  private balance = 280000;

  private onTopUpTapped() {
    console.log("I want to top up my wallet!");
  }
}
</script>