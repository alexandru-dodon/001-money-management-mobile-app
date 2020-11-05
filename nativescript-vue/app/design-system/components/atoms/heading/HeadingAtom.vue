<template>
  <Label
    class="heading-atom"
    :class="rootClasses"
    :text="$slots.default[0].text"
    textWrap
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeadingAtom extends Vue {
  @Prop({ type: String, default: "dark" }) private color!: string;
  @Prop({ type: String, default: "bold" }) private weight!: string;
  @Prop({ type: Number, default: 5 }) private size!: number;

  get rootClasses(): any {
    return {
      [`font-${this.color}`]: true,
      [`${this.weight}-weight`]: true,
      [`size-${this.size}`]: true
    };
  }
}
</script>

<style lang="scss" scoped>
.heading-atom {
  letter-spacing: 0.08;

  &.medium-weight {
    font-weight: 500;
  }
  
  &.bold-weight {
    font-weight: 700;
  }
  
  &.heavy-weight {
    font-weight: 900;
  }

  &.size-1 {
    font-size: 48;
  }

  &.size-2 {
    font-size: 36;
  }

  &.size-3 {
    font-size: 28;
  }

  &.size-4 {
    font-size: 22;
  }

  &.size-5 {
    font-size: 16;
  }

  &.size-6 {
    font-size: 14;
  }
}

</style>