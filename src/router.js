import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Pokemon from "./views/PokemonDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/pokemon/:name",
      name: "pokemon",
      component: Pokemon
    }
  ]
});
