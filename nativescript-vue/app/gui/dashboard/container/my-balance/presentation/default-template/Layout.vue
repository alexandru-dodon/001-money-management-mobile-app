<template>
  <HorizontalLayout class="layout" spread>
    <HorizontalLayoutColumn middle>
      <VerticalLayout gap="large">
        <VerticalLayoutRow>
          <slot name="balance" />
        </VerticalLayoutRow>

        <VerticalLayoutRow>
          <LabelAtom color="white">Available Balance</LabelAtom>
        </VerticalLayoutRow>
      </VerticalLayout>
    </HorizontalLayoutColumn>

    <HorizontalLayoutColumn middle>
      <slot name="top-up" />
    </HorizontalLayoutColumn>
  </HorizontalLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>
