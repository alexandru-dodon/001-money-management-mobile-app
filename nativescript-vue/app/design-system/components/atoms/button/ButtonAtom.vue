<template>
  <Button
    class="button-atom uppercase bold-weight"
    :height="`${height}`"
    :class="rootClasses"
    :text="$slots.default[0].text"
    @tap="$emit('tapped', $event)"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ButtonAtom extends Vue {
  @Prop({ type: String, default: "white" }) private color!: string;
  @Prop({ type: String, default: "primary" }) private fontColor!: string;
  @Prop({ type: String, default: "large" }) private gutter!: string;
  @Prop({ type: Number, default: 42 }) private height!: number;

  get rootClasses(): any {
    return {
      [`bg-${this.color}`]: true,
      [`font-${this.fontColor}`]: true,
      [`gutter-x-${this.gutter}`]: this.gutter
    };
  }
}
</script>

<style lang="scss" scoped>
.button-atom {
  &.uppercase {
    text-transform: uppercase;
  }
  
  &.bold-weight {
    font-weight: 700;
  }
}
</style>