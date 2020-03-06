<template>
  <span class="moment">{{ nextOpen }}</span>
</template>

<script>
import moment from 'moment'
import store from '../store'

export default {
  computed: {
    nextOpen: function() {
      let nextOpen = moment(store.now)
      nextOpen.hour(9).startOf('hour')
      if (nextOpen.isBefore(store.now))
        nextOpen.add(1, 'd')
      store.nextOpen = nextOpen
      return nextOpen.format('dddd, MMMM D, YYYY H:mm A')
    }
  },
}
</script>