<template>
  <StackLayout class="vertical-layout" :class="rootClasses"><slot /></StackLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class VerticalLayout extends Vue {
  @Prop(String) private gap!: string;
  @Prop(String) private gutter!: string;

  get rootClasses(): any {
    return {
      [`${this.gap}-gap`]: this.gap,
      [`gutter-a-${this.gutter}`]: this.gutter
    };
  }
}
</script>

<style lang="scss">
@import "~/design-system/theme/default.scss";

.vertical-layout {
  &.very-large-gap {
    & > .vertical-layout-row {
      @extend .gap-b-very-large;
    }
  }

  &.large-gap {
    & > .vertical-layout-row {
      @extend .gap-b-large;
    }
  }

  &:last-child {
    @extend .gap-b-none;
  }
}

</style>
