<template>
  <span class="moment">{{ earliest }}</span>
</template>

<script>
import moment from 'moment'
import store from '../store'

export default {
  computed: {
    earliest: function() {
      let earliest = moment(store.nextOpen)
      earliest.add(30, 'd')
      store.earliest = earliest
      return earliest
    }
  },
}
</script>