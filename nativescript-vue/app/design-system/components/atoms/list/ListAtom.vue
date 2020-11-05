<template>
  <Component :is="containerComponent" :gutter="gutter">
    <Component
      v-for="(item, index) in items"
      :key="item.id"
      :is="itemComponent"
      :class="{ [`gap-l-${gap}`]: gap && index > 0 }"
    >
      <slot name="item" :item="item" />
    </Component>
  </Component>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ListAtom extends Vue {
  @Prop(Array) private items: any[];
  @Prop(String) private gap: string;
  @Prop(String) private gutter!: string;

  @Prop(Boolean) private horizontal!: boolean;

  get containerComponent(): string {
    return this.horizontal ? "HorizontalLayout" : "VerticalLayout";
  }

  get itemComponent(): string {
    return this.horizontal ? "HorizontalLayoutColumn" : "VerticalLayoutRow";
  }
}
</script>