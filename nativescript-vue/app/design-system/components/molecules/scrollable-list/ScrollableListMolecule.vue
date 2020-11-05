<template>
  <ScrollView class="scrollable-list-molecule" :class="rootClasses" :orientation="orientation" :gutter="gutter">
    <ListAtom v-bind="{ items, gap, gutter, horizontal }">
      <template v-slot:item="{ item }">
        <slot name="item" :item="item" />
      </template>
    </ListAtom>
  </ScrollView>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ListAtom } from "../../atoms/list";

@Component({
  components: {
    ListAtom
  }
})
export default class ScrollableListMolecule extends Vue {
  @Prop(Array) private items: any[];
  @Prop(String) private gap: string;
  @Prop(String) private gutter!: string;

  @Prop(Boolean) private horizontal!: boolean;

  get rootClasses(): any {
    return {
      'h-100': !this.horizontal,
      'w-100': this.horizontal
    };
  }

  get orientation(): string {
    if (this.horizontal) {
      return "horizontal";
    }

    return "vertical";
  }
}
</script>

<style lang="scss" scoped>

.scrollable-list-molecule {
  &.h-100 {
    height: 100%;
  }

  &.w-100 {
    width: 100%;
  }
}

</style>
