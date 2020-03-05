import Vue from 'vue'
import moment from 'moment'

const store = Vue.observable({ 
  now: moment(),
  nextOpen: moment(),
  earliest: moment(),
  selected: moment(),
})

export default store;