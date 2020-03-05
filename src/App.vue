<template>
  <div id="app">
    <div>
      It is now <Now />.
    </div>
    <div>
      The next 9 AM open time is <NextOpen />,
    </div>
    <div>
      which can make a 30-day reservation for
      <Earliest />.
    </div>
    <div>
      To make a reservation for <SelectDate />,
    </div>
    <div>
      target this 9 AM open time
      <CalculateOpen />.
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.moment {
  font-weight: bold;
}
</style>
