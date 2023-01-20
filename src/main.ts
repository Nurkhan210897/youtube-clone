import { createApp } from 'vue';
import { svgSpritePlugin } from 'vue-svg-sprite'
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/index.css";

const app = createApp(App);
app.use(svgSpritePlugin, {
  /* eslint-disable global-require */
  url: require("@/assets/img/sprite.svg"),
  class: 'svg-sprite',
})
app.use(store).use(router).mount('#app');
