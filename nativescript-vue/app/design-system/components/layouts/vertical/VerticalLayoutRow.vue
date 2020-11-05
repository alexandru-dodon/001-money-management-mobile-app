<template>
  <StackLayout class="vertical-layout-row"><slot /></StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VerticalLayoutRow extends Vue {}
</script>
