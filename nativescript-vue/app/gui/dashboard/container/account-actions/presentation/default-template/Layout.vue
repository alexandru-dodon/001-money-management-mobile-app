<template>
  <VerticalLayout class="layout" gap="large">
    <VerticalLayoutRow class="stroke-gray stroke-b-solid">
      <BoxAtom class="gutter-a-very-large">
        <slot name="actions" />
      </BoxAtom>
    </VerticalLayoutRow>

    <VerticalLayoutRow class="gutter-x-very-large">
      <HorizontalLayout spread>
        <HorizontalLayoutColumn style="width: 75%" middle>
          <ParagraphAtom color="gray" weight="regular">Lorem ipsum dolor sit amet dan aku tan moyan</ParagraphAtom>
        </HorizontalLayoutColumn>

        <HorizontalLayoutColumn middle>
          <slot name="more" />
        </HorizontalLayoutColumn>
      </HorizontalLayout>
    </VerticalLayoutRow>
  </VerticalLayout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Layout extends Vue {}
</script>
