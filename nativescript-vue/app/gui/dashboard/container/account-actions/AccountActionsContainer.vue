<template>
  <DefaultTemplate class="account-actions-container" @action-tapped="onActionTapped" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import DefaultTemplate from "./presentation/default-template/DefaultTemplate.vue";

@Component({
  components: {
    DefaultTemplate
  }
})
export default class AccountActionsContainer extends Vue {
  private onActionTapped(action: string) {
    console.log(`I tapped on this action: ${action}`);
  }
}
</script>