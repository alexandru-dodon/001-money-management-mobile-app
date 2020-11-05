<template>
  <Layout class="default-template">
    <template slot="balance">
      <HeadingAtom color="white" :size="2">{{ formattedBalance }}</HeadingAtom>
    </template>

    <template slot="top-up">
      <ButtonAtom
        class="circle"
        gutter="very-large"
        color="cyan"
        font-color="white"
        :height="52"
        @tapped="$emit('top-up-tapped', $event)"
      >Top Up</ButtonAtom>
    </template>
  </Layout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { Money } from "@/shared/utils/Money";

import Layout from "./Layout.vue";

@Component({
  components: {
    Layout
  }
})
export default class DefaultTemplate extends Vue {
  @Prop(Number) private balance!: number;

  get formattedBalance() {
    return new Money(this.balance).format(true);
  }
}
</script>
