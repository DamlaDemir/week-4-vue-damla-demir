<template>
  <div class="starship-list-wrapper">
    <fieldset class="starship-filter main-fieldset">
      <legend>Filter</legend>
      <div class="form-item">
        <label for="name">Search:</label>
        <input
          type="text"
          id="name"
          name="name"
          v-model="filterParameters.search"
        />
      </div>

      <button @click="filter">Filter</button>
    </fieldset>
    <fieldset class="starship-list main-fieldset">
      <legend>Starships</legend>
      <div class="starship-card-list">
        <starship-card
          v-for="starship in starships"
          :key="starship.id"
          :starship="starship"
        />
      </div>
      <pager
        v-if="totalPageCount > 1"
        :totalPageCount="totalPageCount"
        @goToPage="goToPage"
      />
    </fieldset>
  </div>
</template>

<script>
import StarshipCard from "../components/StarshipCard.vue";
import Pager from "../components/Pager.vue";
import { getAllStarships } from "../services/ApiService";

export default {
  name: "StarshipList",
  components: {
    StarshipCard,
    Pager,
  },
  data() {
    return {
      starships: [],
      filterParameters: {},
      totalPageCount: 1,
    };
  },
  methods: {
    async getStarships(filterParameters) {
      let response = await getAllStarships(filterParameters);

      if (response) {
        this.starships = response.results;
        this.totalPageCount = Math.ceil(response.count / 10);
      }
    },
    async goToPage(page) {
      this.filterParameters.page = page;
      await this.getStarships(this.filterParameters);
    },
    async filter() {
      delete this.filterParameters.page;
      await this.getStarships(this.filterParameters);
    },
  },
  async mounted() {
    await this.getStarships();
  },
};
</script>

<style>
.starship-list-wrapper {
  width: 75vw;
  margin: 70px auto;
  background-color: rgba(238, 238, 238, 0.8);
  border-radius: 5px;
}

.main-fieldset {
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
    rgba(0, 0, 0, 0.05) 0px 5px 10px;
  margin: 20px;
}

.main-fieldset legend {
  font-size: 20px;
}

.starship-card-list,
.starship-filter {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-flow: row wrap;
  padding: 35px;
  margin-top: 15px;
}

.starship-filter button {
  width: 200px;
  height: 25px;
  margin: 15px;
  border-radius: 8px;
  background-color: #5d697f;
  color: white;
  font-family: inherit;
}

input {
  width: 200px;
  height: 25px;
  margin: 15px;
  border-radius: 8px;
}
</style>
