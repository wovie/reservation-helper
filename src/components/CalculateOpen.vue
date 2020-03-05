<template>
  <span class="moment">{{ open }}</span>
</template>

<script>
import moment from 'moment'
import store from '../store'

export default {
  computed: {
    open: function() {
      let open = moment(store.selected)
      open.add(-30, 'd')
      open.hour(9).startOf('hour')
      return open
    }
  },
}
</script>