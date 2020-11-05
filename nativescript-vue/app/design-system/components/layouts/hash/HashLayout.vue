<template>
  <GridLayout class="hash-layout" :class="rootClasses" :rows="rows" :columns="columns"><slot /></GridLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HashLayout extends Vue {
  @Prop(String) private gutter!: string;
  @Prop({ type: String, default: "auto" }) private rows!: string;
  @Prop({ type: String, default: "auto" }) private columns!: string;

  get rootClasses(): any {
    return {
      [`gutter-a-${this.gutter}`]: this.gutter
    };
  }
}
</script>
