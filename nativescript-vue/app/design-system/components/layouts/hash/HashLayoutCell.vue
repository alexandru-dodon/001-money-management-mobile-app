<template>
  <StackLayout class="hash-layout-cell" :col="`${column}`" :row="`${row}`"><slot /></StackLayout>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HashLayoutCell extends Vue {
  @Prop({ type: Number, default: 0 }) private column!: number;
  @Prop({ type: Number, default: 0 }) private row!: number;
}
</script>
