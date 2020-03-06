<template>
  <span class="moment">{{ now }}</span>
</template>

<script>
import moment from 'moment'
import store from '../store'

export default {
  computed: {
    now: function() {
      return store.now.format('dddd, MMMM D, YYYY h:mm:ss A')
    }
  },
  created: function() {
    this.updateNow()
  },
  methods: {
    updateNow () {
      store.now = moment()
      setTimeout(() => {
        this.updateNow()
      }, 1000)
    },
  },
}
</script>
