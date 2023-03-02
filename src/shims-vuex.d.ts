import { Store } from "vuex";
import type { State } from "@interfaces/store";

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}