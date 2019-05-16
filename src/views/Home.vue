<template>
  <div class="w-full flex flex-wrap flex-start">
    <section class="h-50 container mx-auto mb-8">
      <div class="py-8">
        <input
          class="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
          type="search"
          placeholder="Buscar..."
          v-model="searchText"
        >
      </div>
      <p class="text-lg font-bold mb-2 mx-4">Tipos de Pokemon</p>
      <div class="mx-4 flex justify-betwwen w-full flex-wrap">
        <div class="md-checkbox w-1/2 sm:w-1/4 xl:w-1/6" v-for="type in types" :key="type">
          <input
            :id="'checkbox-'+ type"
            type="checkbox"
            :value="type"
            v-model="selectedPokemonTypes"
          >
          <label :for="'checkbox-'+ type">
            <i class="h-4 w-4 rounded-full mx-2" :class="`bg-${type}`"></i>
            <span class="tracking-wide mx-2 font-medium">{{ type }}</span>
          </label>
        </div>
      </div>
    </section>
    <pokemon v-for="pokemon in filteredPokemons" :key="pokemon.name" :pokemon="pokemon"></pokemon>
  </div>
</template>

<script>
import Pokemon from "@/components/Pokemon";
export default {
  name: "home",
  components: {
    Pokemon
  },
  data() {
    return {
      selectedPokemonTypes: [],
      types: [
        "grass",
        "poison",
        "fire",
        "flying",
        "water",
        "bug",
        "normal",
        "electric",
        "psychic"
      ],
      pokemons: [],
      searchText: ""
    };
  },
  computed: {
    filteredPokemons() {
      return this.pokemons
        .filter(pokemon => pokemon.name.includes(this.searchText.toLowerCase()))
        .filter(pokemon => {
          if (this.selectedPokemonTypes.length === 0) return true;
          return pokemon.types.find(type =>
            this.selectedPokemonTypes.includes(type)
          );
        });
    }
  },
  mounted() {
    this.getPokemons();
  },
  methods: {
    async getPokemons() {
      try {
        const response = await fetch("/pokemons.json");
        const json = await response.json();
        this.pokemons = json;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
