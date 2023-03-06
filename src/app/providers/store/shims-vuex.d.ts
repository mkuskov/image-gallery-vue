import { Store } from "vuex";
import type { State } from "@/shared/api/types";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}