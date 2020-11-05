<template>
  <CardMolecule class="default-template">
    <Layout>
      <template slot="actions">
        <ActionGrid @action-tapped="$emit('action-tapped', $event)" />
      </template>

      <template slot="more">
        <ButtonAtom class="rounding-a-medium" color="faded-cyan" font-color="cyan" :height="48">></ButtonAtom>
      </template>
    </Layout>
  </CardMolecule>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Layout from "./Layout.vue";

import ActionGrid from "../action-grid/ActionGrid.vue";

@Component({
  components: {
    Layout,
    ActionGrid
  }
})
export default class DefaultTemplate extends Vue {}
</script>
