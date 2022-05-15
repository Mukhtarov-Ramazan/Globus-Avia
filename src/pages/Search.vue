<template>
  <div class="container">
    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-start">
        <h2 class="mb-4 text-white">We found the following flights</h2>
        <a href="index.html" class="btn btn-sm btn-secondary test-4-bback"
          >Back</a
        >
      </div>

      <h5 class="mt-4 mb-3 text-white">
        <span class="test-4-fif1">{{ this.$route.query.fromCity }}</span>
        ->
        <span class="test-4-fit1">{{ this.$route.query.toCity }}</span>
      </h5>
      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Date and time of departure</th>
          <th>Arrival time</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr
          v-for="(flight, index) in FLIGHTS.data.flights_to"
          :key="index"
          :class="{'index__active': indexTo === index}"
          class="index__pointer"
          @click="indexActiveTo(index)"
        >
          <td class="test-4-fn">{{ flight.flight_code }}</td>
          <td class="test-4-at">Bombardier CRJ200</td>
          <td>
            <span class="test-4-dd">{{ flight.from.date }}</span>
            at
            <span class="test-4-dt">{{ flight.from.time }}</span>
          </td>
          <td class="test-4-aatime">{{ flight.to.time }}</td>
          <td class="test-4-ft">
            <span class="test-4-fhour">1</span>h
            <span class="test-4-fminutes">30</span>min
          </td>
          <td class="test-4-fp">{{ flight.cost }}</td>
        </tr>
      </table>

      <h5 class="mt-4 mb-3 text-white">
        <span class="test-4-fif2">{{ this.$route.query.toCity }}</span>
        ->
        <span class="test-4-fit2">{{ this.$route.query.fromCity }}</span>
      </h5>
      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>Aircraft</th>
          <th>Date and time of departure</th>
          <th>Arrival time</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr
          v-for="(flight, index) in FLIGHTS.data.flights_back"
          :key="index"
          :class="{'index__active': indexBack === index }"
          @click="indexActiveBack(index)"
          class="index__pointer"
        >
          <td class="test-4-fn">{{ flight.flight_code }}</td>
          <td class="test-4-at">Bombardier CRJ200</td>
          <td>
            <span class="test-4-dd">{{ flight.from.date }}</span>
            at
            <span class="test-4-dt">{{ flight.from.time }}</span>
          </td>
          <td class="test-4-aatime">{{ flight.to.time }}</td>
          <td class="test-4-ft">
            <span class="test-4-fhour">1</span>h
            <span class="test-4-fminutes">30</span>min
          </td>
          <td class="test-4-fp">{{ flight.cost }}</td>
        </tr>
      </table>

      <a @click="queryIndex" class="btn btn-info test-4-bgobook mt-4"
        >Go to booking</a
      >
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      indexTo: "",
      indexBack: "",
      // activeIndexTo: "",
      // activeIndexBack: "",
    };
  },

  methods: {
    indexActiveTo(index) {
      this.indexTo = index;
      // this.activeIndexTo = index;
    },

    indexActiveBack(index) {
      this.indexBack = index;
      // this.activeIndexBack = index;
    },


    queryIndex() {
      this.$router.push({path: '/booking', query: {indexTo: this.indexTo, indexBack: this.indexBack}})
    }
  },

  computed: {
    ...mapGetters(["FLIGHTS"]),
  },
};
</script>

<style>
.index__pointer {
  cursor: pointer;
}
.index__active {
  background-color: #555;
}
</style>
