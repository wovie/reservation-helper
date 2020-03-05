<template>
  <input
    type="date"
    :value="value"
    :min="min"
    @change="selectDate"
  >
</template>

<script>
import moment from 'moment'
import store from '../store'

export default {
  computed: {
    value: function() {
      return store.selected.format('YYYY-MM-DD')
    },
    min: function() {
      return store.earliest.format('YYYY-MM-DD')
    }
  },
  created: function() {
    store.selected = moment(store.earliest)
  },
  methods: {
    selectDate: function(e) {
      store.selected = moment(e.target.value)
    }
  },
}
</script>