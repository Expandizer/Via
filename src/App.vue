<template>
  <About_via/>
</template>

<script>
import About_via from './components/About_via.vue'
export default {
  name: 'App',
  components: {
    About_via,
  }
}
</script>

<style>
html{
  scroll-behavior: smooth;
  min-width: 550px;
}
html *{
  overflow-x:hidden ;
}
</style>
