<template>
  <HashLayout class="action-grid" columns="*, *, *" rows="auto, auto">
    <HashLayoutCell>
      <ActionGridItem />
    </HashLayoutCell>

    <HashLayoutCell :column="1">
      <ActionGridItem />
    </HashLayoutCell>

    <HashLayoutCell :column="2">
      <ActionGridItem />
    </HashLayoutCell>

    <HashLayoutCell :row="1">
      <ActionGridItem />
    </HashLayoutCell>

    <HashLayoutCell :row="1" :column="1">
      <ActionGridItem />
    </HashLayoutCell>

    <HashLayoutCell :row="1" :column="2">
      <ActionGridItem />
    </HashLayoutCell>
  </HashLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import ActionGridItem from "./ActionGridItem.vue";

@Component({
  components: {
    ActionGridItem
  }
})
export default class ActionGrid extends Vue {}
</script>
