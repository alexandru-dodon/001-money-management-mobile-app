<template>
  <StackLayout
    class="box-atom"
    :class="rootClasses"
  ><slot /></StackLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BoxAtom extends Vue {
  @Prop({ type: String, default: "transparent" }) private color!: string;

  get rootClasses(): any {
    return {
      [`bg-${this.color}`]: true
    };
  }
}
</script>
