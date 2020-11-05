<template>
  <Label
    class="paragraph-atom"
    :class="rootClasses"
    :text="$slots.default[0].text"
    textWrap
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ParagraphAtom extends Vue {
  @Prop({ type: String, default: "dark" }) private color!: string;
  @Prop({ type: String, default: "medium" }) private weight!: string;
  @Prop({ type: Number, default: 3 }) private size!: number;
  @Prop({ type: Number, default: 2 }) private lineHeight!: number;

  get rootClasses(): any {
    return {
      [`font-${this.color}`]: true,
      [`${this.weight}-weight`]: true,
      [`size-${this.size}`]: true,
      [`line-height-${this.lineHeight}`]: true
    };
  }
}
</script>

<style lang="scss" scoped>
.paragraph-atom {
  letter-spacing: 0.08;

  &.regular-weight {
    font-weight: 400;
  }

  &.medium-weight {
    font-weight: 500;
  }
  
  &.bold-weight {
    font-weight: 700;
  }
  
  &.size-1 {
    font-size: 12;
  }

  &.size-2 {
    font-size: 14;
  }

  &.size-3 {
    font-size: 16;
  }

  &.size-4 {
    font-size: 18;
  }

  &.size-5 {
    font-size: 20;
  }

  &.size-6 {
    font-size: 22;
  }

  &.line-height-1 {
    line-height: 1;
  }

  &.line-height-2 {
    line-height: 1.5;
  }

  &.line-height-3 {
    line-height: 2;
  }
}

</style>