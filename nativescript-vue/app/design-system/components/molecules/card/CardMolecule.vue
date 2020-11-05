<template>
  <BoxAtom
    class="card-molecule rounding-a-large"
    :color="color"
    :class="rootClasses"
  ><slot /></BoxAtom>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import { BoxAtom } from "../../atoms/box";

@Component({
  components: {
    BoxAtom
  }
})
export default class CardMolecule extends Vue {
  @Prop({ type: String, default: "white" }) private color!: string;
  @Prop(String) private gutter!: string;

  get rootClasses(): any {
    return {
      [`gutter-a-${this.gutter}`]: this.gutter
    };
  }
}
</script>
