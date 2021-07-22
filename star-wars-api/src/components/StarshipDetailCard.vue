<template>
  <fieldset class="main-fieldset">
    <legend>{{ starship.name }}</legend>
    <div class="starship-detail-card">
      <section class="img-section">
        <img src="../assets/images/profile.jpg" alt="profile-img" />
      </section>
      <fieldset class="info-section">
        <legend>Info</legend>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-venus-mars" />
            <span>Name</span>
          </div>
          <span>{{ starship.name }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-stream" />
            <span>Model</span>
          </div>
          <span>{{ starship.model }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fab fa-typo3" /> <span>Hyper Drive Rating</span>
          </div>
          <span>{{ starship.hyperdrive_rating }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-map-marker" />
            <span>Passengers</span>
          </div>
          <span>{{ starship.passengers }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-location-arrow" />
            <span>Max Atmosphering Speed</span>
          </div>
          <span>{{ starship.max_atmosphering_speed }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-location-arrow" />
            <span>Manufacturer</span>
          </div>
          <span>{{ starship.manufacturer }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-location-arrow" />
            <span>Manufacturer</span>
          </div>
          <span>{{ starship.manufacturer }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-location-arrow" />
            <span>Crew</span>
          </div>
          <span>{{ starship.crew }}</span>
        </div>
        <div class="starship-detail-info-item">
          <div class="title-content">
            <i class="fas fa-location-arrow" />
            <span>Cargo Capacity</span>
          </div>
          <span>{{ starship.cargo_capacity }}</span>
        </div>
      </fieldset>

      <div class="footer-section">
        <button
          class="back"
          @click="
            () => {
              this.$router.back();
            }
          "
        >
          BACK
        </button>
      </div>
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "StarshipDetailCard",
  props: {
    starship: {
      type: Object,
      require: true,
    },
  },
};
</script>

<style>
.starship-detail-card {
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  background-color: #99b1db;
  box-shadow: 5px 10px #888888;
  border-radius: 10px;
}

.img-section {
  grid-column: 1/2;
  display: flex;
  align-items: center;
}

.img-section img {
  margin: 20px 30px;
  border-radius: 10px;
  border: 3px solid #092252;
  box-shadow: 5px 10px #888888;
  height: 50%;
  width: 85%;
}

.info-section {
  grid-column: 2/3;
}

.info-section legend {
  color: white;
}

.starship-detail-info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0dbdb;
  color: white;
  padding: 15px;
}

.starship-detail-info-item > span {
  color: #eceb77;
}

.footer-section {
  grid-column: 1/3;
  grid-row: 3/4;
  margin: 20px;
}

.back {
  background-color: #5d697f;
  border-radius: 5px;
  padding: 10px;
  color: white;
  cursor: pointer;
  text-decoration: none;
  font-family: "Otomanopee One", sans-serif;
}
</style>
