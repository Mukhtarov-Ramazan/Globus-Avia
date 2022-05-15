<template>
  <div class="container">
    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-start">
        <h2 class="mb-4 text-white">Booking</h2>
        <a href="search.html" class="btn btn-sm btn-secondary test-5-bgoback"
          >Back</a
        >
      </div>

      <div class="d-flex justify-content-between align-items-baseline mb-4">
        <h4 class="text-white">Flight information</h4>
      </div>

      <table class="table table-bordered text-white bg-secondary">
        <tr>
          <th>Flight</th>
          <th>From where</th>
          <th>Date and time of departure</th>
          <th>To where</th>
          <th>Flight time</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td class="test-5-fc">
            {{ FLIGHTS.data.flights_to[this.$route.query.indexTo].flight_code }}
          </td>
          <td>
            <span class="test-5-from-cn">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].from.city
            }}</span
            >,
            <span class="test-5-from-an">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].from.airport
            }}</span>
          </td>
          <td>
            <span class="test-5-dd">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].from.date
            }}</span>
            at
            <span class="test-5-dt">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].from.time
            }}</span>
          </td>
          <td class="test-5-to">
            <span class="test-5-to-cn">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].to.date
            }}</span
            >,
            <span class="test-5-to-an">{{
              FLIGHTS.data.flights_to[this.$route.query.indexTo].to.airport
            }}</span>
          </td>
          <td class="test-5-at">
            {{ FLIGHTS.data.flights_to[this.$route.query.indexTo].to.time }}
          </td>
          <td class="test-5-fp">
            {{ FLIGHTS.data.flights_to[this.$route.query.indexTo].cost }}
          </td>
        </tr>

        <tr>
          <td class="test-5-fc">
            {{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].flight_code
            }}
          </td>
          <td>
            <span class="test-5-from-cn">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].from.city
            }}</span
            >,
            <span class="test-5-from-an">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].from
                .airport
            }}</span>
          </td>
          <td>
            <span class="test-5-dd">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].from.date
            }}</span>
            at
            <span class="test-5-dt">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].from.time
            }}</span>
          </td>
          <td class="test-5-to">
            <span class="test-5-to-cn">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].to.date
            }}</span
            >,
            <span class="test-5-to-an">{{
              FLIGHTS.data.flights_back[this.$route.query.indexBack].to.airport
            }}</span>
          </td>
          <td class="test-5-at">
            {{ FLIGHTS.data.flights_back[this.$route.query.indexBack].to.time }}
          </td>
          <td class="test-5-fp">
            {{ FLIGHTS.data.flights_back[this.$route.query.indexBack].cost }}
          </td>
        </tr>
        <tr>
          <td colspan="5" class="text-right">
            <b>Total cost</b>
          </td>
          <td colspan="1" class="text-right test-5-price">{{ totalCost }}</td>
        </tr>
      </table>
    </section>

    <section class="mt-5">
      <div class="d-flex justify-content-between align-items-baseline mb-4">
        <h4 class="text-white">Passengers</h4>

      </div>

      <form @submit.prevent>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-name w-100"
              placeholder="First name"
              v-model="form.firstName"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-last w-100"
              placeholder="Last name"
              v-model="form.lastName"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
            <input
              type="text"
              class="form-control test-5-dob"
              placeholder="Date of Birth"
              v-model="form.dateBirth"
            />
          </div>
          <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
            <input
              type="text"
              class="form-control test-5-doc"
              placeholder="Document number"
              v-model="form.documentNamber"
            />
          </div>
          <div class="col-12 col-xl-2 mt-3 mt-xl-0">
            <button class="btn btn-info btn-sm form-control test-5-remove" @click="addPassenger(this.form)">
              Add passenger
            </button>
          </div>
        </div>

        <button class="btn btn-info mt-4 form-control test-5-book">
          Confirm
        </button>
      </form>

      <table class="table text-white table-users" v-if="USERS.length">
        <tr>
          <th>First name</th>
          <th>Last name</th>
          <th>Date of Birth</th>
          <th>Document number</th>
          <th></th>
        </tr>
        <tr v-for="(user, index) in USERS" :key="index">
          <td class="test-6-name">{{ user.firstName }}</td>
          <td class="test-6-last">{{ user.lastName }}</td>
          <td class="test-6-dob">{{ user.dateBirth }}</td>
          <td class="test-6-doc">{{ user.documentNamber }}</td>
          <td>
            <button
              class="btn btn-danger btn-info btn-sm test-5-add"
              @click="removePassenger(index)"
            >
              Remove
            </button>
          </td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      totalCost: "",
      form: {
        firstName: "",
        lastName: "",
        dateBirth: "",
        documentNamber: "",
      },
    };
  },

  mounted() {
    this.totalCost =
      this.FLIGHTS.data.flights_back[this.$route.query.indexBack].cost +
      this.FLIGHTS.data.flights_to[this.$route.query.indexTo].cost;
  },

  methods: {
    ...mapActions(["ADD_PASSENGERS", "REMOVE_PASSENGERS"]),

    addPassenger() {
      this.ADD_PASSENGERS(this.form);

      this.form.firstName = "";
      this.form.lastName = "";
      this.form.dateBirth = "";
      this.form.documentNamber = "";
    },

    removePassenger(index) {
      this.REMOVE_PASSENGERS(index);
    }
  },

  computed: {
    ...mapGetters(["FLIGHTS", "USERS"]),
  },
};
</script>

<style>
.table-users {
  margin-top: 50px;
}
</style>
