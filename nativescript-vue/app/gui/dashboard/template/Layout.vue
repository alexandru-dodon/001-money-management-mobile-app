<template>
  <AppLayout class="layout">
    <VerticalLayout gap="very-large">
      <VerticalLayoutRow class="gutter-x-large">
        <slot name="balance" />
      </VerticalLayoutRow>
      
      <VerticalLayoutRow class="gutter-x-large">
        <slot name="actions" />
      </VerticalLayoutRow>
      
      <VerticalLayoutRow>
        <slot name="upcoming" />
      </VerticalLayoutRow>
    </VerticalLayout>
  </AppLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import AppLayout from "@/shared/components/AppLayout.vue";

@Component({
  components: {
    AppLayout
  }
})
export default class Layout extends Vue {}
</script>
