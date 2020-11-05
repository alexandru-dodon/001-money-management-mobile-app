<template>
  <StackLayout class="horizontal-layout-row" :verticalAlignment="verticalAlignment"><slot /></StackLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HorizontalLayoutRow extends Vue {
  @Prop(Boolean) private middle!: boolean;

  get verticalAlignment(): string {
    if (this.middle) {
      return "center";
    }

    return "stretch";
  }
}
</script>
