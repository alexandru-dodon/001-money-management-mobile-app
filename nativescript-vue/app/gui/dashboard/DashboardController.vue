<template>
  <PageAtom class="dashboard-controller">
    <DefaultTemplate />
  </PageAtom>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DefaultTemplate from "./template/DefaultTemplate.vue";

@Component({
  components: {
    DefaultTemplate
  }
})
export default class DashboardController extends Vue {}
</script>
