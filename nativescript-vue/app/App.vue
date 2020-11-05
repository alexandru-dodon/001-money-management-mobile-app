<template>
  <DashboardController />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import DashboardController from "@/gui/dashboard/DashboardController.vue";

@Component({
  components: {
    DashboardController
  }
})
export default class App extends Vue {}
</script>