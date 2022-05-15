<template>
  <section class="mt-5">
    <h2 class="mb-4 text-white">Flight search</h2>

    <form @submit.prevent>
      <div class="row">
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fd w-100"
            placeholder="From where"
            v-model="searchForm.from"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fa w-100"
            placeholder="To where"
            v-model="searchForm.to"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0">
          <input
            type="text"
            class="form-control test-0-fdt"
            placeholder="Departing"
            v-model="searchForm.date1"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0">
          <input
            type="text"
            class="form-control test-0-fat"
            placeholder="Returning"
            v-model="searchForm.date2"
          />
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-sm-6 col-lg-2 mt-3 col-xl-1 mt-lg-0 pr-xl-0">
          <select class="form-control test-0-fnp" v-model="searchForm.passengers">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <div class="invalid-feedback">Error message</div>
        </div>
        <div class="col-12 col-xl-1 px-2 mt-3 mt-xl-0">
          <button class="btn btn-info form-control test-0-fbs" @click="getFlights(this.searchForm)">Search</button>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data() {
    return{
      searchForm: {
        from: '',
        to: '',
        date1: '',
        date2: '',
        passengers: ''
      }
    }
  },

  methods: {
    ...mapActions(['GET_FLIGHTS']),

    getFlights() {
      this.$router.push({path: '/search', query: {fromCity: this.searchForm.from, toCity: this.searchForm.to}})
      this.GET_FLIGHTS(this.searchForm)
    }
  },

};
</script>

<style></style>
