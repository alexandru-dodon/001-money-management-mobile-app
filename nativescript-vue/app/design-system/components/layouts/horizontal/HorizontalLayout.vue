<template>
  <Component
    class="horizontal-layout"
    orientation="horizontal"
    v-bind="rootAttrs"
    :is="rootComponentName"
    :class="rootClasses"
  ><slot /></Component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HorizontalLayout extends Vue {
  @Prop(Boolean) private spread;
  @Prop(String) private gutter!: string;

  get rootComponentName(): string {
    return this.spread ? "FlexboxLayout" : "StackLayout";
  }

  get contentAlignment(): string {
    return this.spread ? "space-between" : "flex-start";
  }

  get rootAttrs(): any {
    return {
      justifyContent: this.contentAlignment
    };
  }

  get rootClasses(): any {
    return {
      [`gutter-a-${this.gutter}`]: this.gutter
    };
  }
}
</script>
