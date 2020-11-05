<template>
  <VerticalLayout class="app-layout" gap="very-large">
    <VerticalLayoutRow class="gutter-x-large">
      <HorizontalLayout spread>
        <HorizontalLayoutColumn>
          <Label text="Menu" />
        </HorizontalLayoutColumn>

        <HorizontalLayoutColumn>
          <Label text="Notifications" />
        </HorizontalLayoutColumn>
      </HorizontalLayout>
    </VerticalLayoutRow>

    <VerticalLayoutRow>
      <slot />
    </VerticalLayoutRow>
  </VerticalLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppLayout extends Vue {}
</script>