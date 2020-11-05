<template>
  <ScrollableListMolecule class="transaction-list" gutter="large" gap="large" :items="transactions" horizontal>
    <template v-slot:item="{ item: transaction }">
      <TransactionItem :note="transaction.note" :amount="transaction.amount" :color="transaction.color" />
    </template>
  </ScrollableListMolecule>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { ScrollableListMolecule } from "@/design-system/components/molecules/scrollable-list";

import TransactionItem from "./TransactionItem.vue";

@Component({
  components: {
    ScrollableListMolecule,
    TransactionItem
  }
})
export default class TransactionList extends Vue {
  @Prop(Array) private transactions!: any[];
}
</script>
