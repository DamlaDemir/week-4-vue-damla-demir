<template>
  <article class="starship-card">
    <section class="card-header">
      <img src="../assets/images/profile.jpg" alt="profile-img" />
    </section>
    <section class="card-body">
      <div class="card-title">{{ starship.name }}</div>
      <div class="card-info">
        <div class="card-info-item">
          <i class="fas fa-venus-mars">
            <span>Model</span>
          </i>
          <span>{{ starship.model }}</span>
        </div>
        <div class="card-info-item">
          <i class="fas fa-stream">
            <span>HyperDrive Rating</span>
          </i>
          <span>{{ starship.hyperdrive_rating }}</span>
        </div>
      </div>
    </section>
    <section class="card-footer">
      <router-link :to="`/starshipDetail/${getId}`">
        Show Detail
      </router-link>
    </section>
  </article>
</template>

<script>
export default {
  name: "StarshipCard",
  props: {
    starship: {
      type: Object,
      require: true,
    },
  },

  data() {
    return {};
  },
  computed: {
    getId() {
      return this.starship.url.split("/")[5];
    },
  },
};
</script>

<style>
.starship-card {
  width: 320px;
  height: 300px;
  border: 1px solid #092252;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  background-color: #99b1db;
  box-shadow: 5px 10px #888888;
}

.starship-card:hover {
  transform: scale(1.1);
}

.card-header {
  height: 80px;
  border-radius: 10px 10px 0 0;
  position: relative;
  background-image: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/373d79c1-a0eb-43e9-87da-f64a9e08cbf2/dur8gy-2286eb12-d672-4f75-b157-0ccd27d33bf5.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM3M2Q3OWMxLWEwZWItNDNlOS04N2RhLWY2NGE5ZTA4Y2JmMlwvZHVyOGd5LTIyODZlYjEyLWQ2NzItNGY3NS1iMTU3LTBjY2QyN2QzM2JmNS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.zAzDYnP2AITJW-OZufxBpQpkT4YMSyVdGhEeVR_2jL4);
}

.card-header img {
  height: 80px;
  width: 80px;
  border-radius: 50px;
  border: 2px solid #092252;
  position: absolute;
  top: 20px;
  left: 120px;
}

.card-body {
  margin-top: 25px;
  display: flex;
  flex-flow: column wrap;
  gap: 20px;
  height: 150px;
  padding-left: 3px;
}

.card-title {
  font-size: 20px;
  text-align: center;
}

.card-info-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ccc;
  font-size: 13px;
}

.card-info-item span {
  font-family: "Otomanopee One", sans-serif;
  margin: 8px;
}

.card-info-item > span {
  color: #eceb77;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}

.card-footer a {
  background-color: #5d697f;
  border-radius: 5px;
  padding: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
</style>
