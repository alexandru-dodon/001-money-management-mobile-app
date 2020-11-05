<template>
  <AbsoluteLayout
    height="100%"
    class="cover-layout"
  >
    <StackLayout width="100%" height="100%" top="0" left="0">
      <slot name="background" />
    </StackLayout>

    <StackLayout width="100%" height="100%" top="0" left="0">
      <slot name="foreground" />
    </StackLayout>
  </AbsoluteLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class CoverLayout extends Vue {
  // @Prop({ type: String, default: "light-gray" }) private color!: string;
}
</script>
