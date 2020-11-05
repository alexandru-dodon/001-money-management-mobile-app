<template>
  <Page
    class="page-atom"
    backgroundSpanUnderStatusBar="true"
  ><slot /></Page>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageAtom extends Vue {}
</script>
