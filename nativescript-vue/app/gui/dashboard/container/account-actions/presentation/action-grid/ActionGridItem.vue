<template>
  <VerticalLayout class="action-grid-item" gap="large">
    <VerticalLayoutRow>
      <LabelAtom>Send</LabelAtom>
    </VerticalLayoutRow>

    <VerticalLayoutRow>
      <LabelAtom>Send</LabelAtom>
    </VerticalLayoutRow>
  </VerticalLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ActionGridItem extends Vue {}
</script>
