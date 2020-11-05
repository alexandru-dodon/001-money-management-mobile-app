import { PluginContext } from '../PluginContext';

import { CoverLayout } from "@/design-system/components/layouts/cover";
import { HorizontalLayout, HorizontalLayoutColumn } from "@/design-system/components/layouts/horizontal";
import { VerticalLayout, VerticalLayoutRow } from "@/design-system/components/layouts/vertical";
import { HashLayout, HashLayoutCell } from "@/design-system/components/layouts/hash";

import { BoxAtom } from "@/design-system/components/atoms/box";
import { ButtonAtom } from "@/design-system/components/atoms/button";
import { HeadingAtom } from "@/design-system/components/atoms/heading";
import { LabelAtom } from "@/design-system/components/atoms/label";
import { PageAtom } from "@/design-system/components/atoms/page";
import { ParagraphAtom } from "@/design-system/components/atoms/paragraph";

import { CardMolecule } from "@/design-system/components/molecules/card";

export default async function({ Vue }: PluginContext) {
  Vue.component("CoverLayout", CoverLayout);

  Vue.component("HorizontalLayout", HorizontalLayout);
  Vue.component("HorizontalLayoutColumn", HorizontalLayoutColumn);

  Vue.component("VerticalLayout", VerticalLayout);
  Vue.component("VerticalLayoutRow", VerticalLayoutRow);

  Vue.component("HashLayout", HashLayout);
  Vue.component("HashLayoutCell", HashLayoutCell);

  Vue.component("BoxAtom", BoxAtom);
  Vue.component("ButtonAtom", ButtonAtom);
  Vue.component("HeadingAtom", HeadingAtom);
  Vue.component("LabelAtom", LabelAtom);
  Vue.component("PageAtom", PageAtom);
  Vue.component("ParagraphAtom", ParagraphAtom);

  Vue.component("CardMolecule", CardMolecule);
}
