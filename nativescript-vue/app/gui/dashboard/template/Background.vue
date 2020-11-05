<template>
  <BoxAtom style="height: 100%" class="background" color="light-gray">
    <BoxAtom style="height: 250" color="primary" />
  </BoxAtom>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Background extends Vue {}
</script>
