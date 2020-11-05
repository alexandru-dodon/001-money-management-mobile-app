<template>
  <DefaultTemplate class="upcoming-transactions-container" :transactions="transactions" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DefaultTemplate from "./presentation/default-template/DefaultTemplate.vue";

@Component({
  components: {
    DefaultTemplate
  }
})
export default class UpcomingTransactionsContainer extends Vue {
  get colors() {
    return ["primary", "aqua", "cyan", "orange"];
  }

  get transactions(): any[] {
    return [
      {
        id: `${Math.floor(Math.random() * 99999999)}`,
        note: "Design logo for ASA",
        amount: 24000 // cents
      },
      {
        id: `${Math.floor(Math.random() * 99999999)}`,
        note: "Next meeting",
        amount: 11400
      },
      {
        id: `${Math.floor(Math.random() * 99999999)}`,
        note: "Nurman sent you",
        amount: 19000
      }
    ].map(({ id, note, amount }) => ({
      id,
      note,
      amount: this.formatAmount(amount / 100),
      color: this.assignColor()
    }));
  }

  private assignColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);

    return this.colors[randomIndex] || this.colors[0];
  }

  private formatAmount(amount: number): string {
    return `$${amount}`;
  }
}
</script>