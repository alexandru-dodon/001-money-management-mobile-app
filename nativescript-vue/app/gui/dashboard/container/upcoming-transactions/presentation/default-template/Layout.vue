<template>
  <VerticalLayout class="layout">
    <VerticalLayoutRow class="gutter-x-large">
      <HeadingAtom weight="medium" :size="4">Upcoming</HeadingAtom>
    </VerticalLayoutRow>

    <VerticalLayoutRow>
      <slot name="transactions" />
    </VerticalLayoutRow>
  </VerticalLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>
