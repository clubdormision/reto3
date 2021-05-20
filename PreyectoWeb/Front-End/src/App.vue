<template>
    <div id="app">
      <div id="nav">
          <Navigation/>
      </div>
    </div>
  <router-view/>
</template>

<script>
import Navigation from '@/components/layout/Navigation';

export default {
  components: {
    Navigation
  },
}
</script>

<style lang="sass">
  @import './scss/App.scss'
</style>
