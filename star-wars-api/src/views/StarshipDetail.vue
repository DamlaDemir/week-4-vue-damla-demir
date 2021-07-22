<template>
  <div class="starship-detail-wrapper">
    <starship-detail-card :starship="starship" />
  </div>
</template>

<script>
import StarshipDetailCard from "../components/StarshipDetailCard";
import { getStarship } from "../services/ApiService";

export default {
  name: "StarshipDetail",
  components: {
    StarshipDetailCard,
  },
  data() {
    return {
      starship: {},
    };
  },
  methods: {
    async getStarshipDetial() {
      let response = await getStarship(this.getStarshipId);

      if (response) {
        this.starship = response;
      }
    },
  },
  computed: {
    getStarshipId() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    await this.getStarshipDetial();
  },
};
</script>

<style>
.starship-detail-wrapper {
  margin-top: 70px;
  width: 70vw;
  margin: 70px auto;
  background-color: rgba(238, 238, 238, 0.7);
  border-radius: 5px;
}
</style>
