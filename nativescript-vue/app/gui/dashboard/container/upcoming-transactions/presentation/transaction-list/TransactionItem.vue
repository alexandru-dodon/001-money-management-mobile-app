<template>
  <CardMolecule class="transaction-item" style="width: 150" gutter="large" :color="color">
    <VerticalLayout gap="very-large">
      <VerticalLayoutRow>
        <ParagraphAtom color="white">{{ note }}</ParagraphAtom>
      </VerticalLayoutRow>

      <VerticalLayoutRow>
        <HeadingAtom color="white" :size="3">{{ amount }}</HeadingAtom>
      </VerticalLayoutRow>
    </VerticalLayout>
  </CardMolecule>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TransactionItem extends Vue {
  @Prop(String) private note!: string;
  @Prop(String) private amount!: string;
  @Prop(String) private color!: string;
}
</script>
