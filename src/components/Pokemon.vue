<template>
  <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 xl:w-1/4 text-center mx-auto px-4 mb-6 relative group">
      <div class="mb-2 relative w-36 h-48 flex items-center justify-center group-hover:shadow-lg">
        <div class="absolute flex w-full h-full">
          <div class="w-full bg-poison"
               v-for="type in pokemon.types"
               :key="type"
               :class="`bg-${type}`"></div>
        </div>
        <img :src="require(`@/assets/images/pokemons/${pokemon.image}`)"
             alt="bulbasaur"
             width="100"
             height="100"
             class="z-50 relative py-4">
      </div>
      <div class="capitalize font-bold text-lg">{{ pokemon.name }}</div>
      <router-link :to="{name: 'pokemon', params: {name: pokemon.name}}" class="absolute h-full w-full"></router-link>
    </div>
</template>

<script>
export default {
  name: "Pokemon",
  props: {
    pokemon: {
      required: true,
      type: Object
    }
  }
};
</script>
