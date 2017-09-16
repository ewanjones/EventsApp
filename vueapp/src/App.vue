<template>
  <div id="app">
    <addEvent></addEvent>
    <br>
    <br>
    <eventTable></eventTable>
  </div>
</template>

<script>
import addEvent from './components/addEvent'
import eventTable from './components/eventTable'

export default {
  name: 'app',
  components: {
    addEvent,
    eventTable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
