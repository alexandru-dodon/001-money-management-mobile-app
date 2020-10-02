import Vue from "vue";
import { Person } from "mobile-core/dist/passport/domain";

import { AppModules } from "@/core/AppModules";

declare module "vue/types/vue" {
  interface Vue {
    $v: any;
    $modules: AppModules;
    $myself: Person;
    myself: Person;
    myselfLoaded: boolean;
    isAuthenticated: boolean;
    myFullName: string;
    myUsername: string;
    myAvatar: string;
  }
}
