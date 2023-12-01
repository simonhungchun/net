import Vue from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import "@/assets/main.css";
import * as Sentry from "@sentry/vue";

Vue.config.productionTip = false;
Sentry.init({
  Vue,
  dsn: "https://91681c33ab5f18267cf093ed3377a778@o4506314774740992.ingest.sentry.io/4506314777821184",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
