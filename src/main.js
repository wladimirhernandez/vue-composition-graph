import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from './router'

Vue.config.productionTip = false;

import { provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import VueCompositionApi from "@vue/composition-api";
import { apolloClient } from "./graphql/client";
import store from './store'

Vue.use(VueCompositionApi);

new Vue({
  vuetify,
  router,
  store,
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: (h) => h(App)
}).$mount("#app");
