<template>
  <Account_creation/>
</template>

<script>
import Account_creation from './components/Account_creation.vue'
export default {
  name: 'app',
  components: {
    Account_creation,
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
