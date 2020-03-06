<template>
  <div id="app">
    <div>
      It is now <Now />.
    </div>
    <div>
      <div>
        The next <span class="open-time">booking time</span> is <NextOpen />,
      </div>
      <div>
        which makes a <span class="reservation">reservation</span> for
        <Earliest />.
      </div>
    </div>
    <div>
      <div>
        To make a <span class="reservation">reservation</span> for <SelectDate />,
      </div>
      <div>
        the <span class="open-time">booking time</span> is
        <CalculateOpen />.
      </div>
    </div>
    <div>
      <div>
        <span class="open-time">Booking time</span> is usually 9 AM, 10 AM or midnight.
      </div>
      <div>
        <span class="reservation">Reservations</span> are typically available 30 days in advance.
      </div>
    </div>
  </div>
</template>

<script>
import Now from './components/Now.vue'
import NextOpen from './components/NextOpen.vue'
import Earliest from './components/Earliest.vue'
import CalculateOpen from './components/CalculateOpen.vue'
import SelectDate from './components/SelectDate.vue'

export default {
  name: 'App',
  components: {
    Now,
    NextOpen,
    Earliest,
    CalculateOpen,
    SelectDate,
  },
}
</script>

<style lang="less">
@import (less) "~colors.css/css/colors.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 4rem;
  .black();
}

#app > div {
  padding-bottom: 1rem;
}

.moment {
  font-weight: bold;
}

.open-time {
  font-weight: bold;
  .olive();
}

.reservation {
  font-weight: bold;
  .maroon();
}
</style>
