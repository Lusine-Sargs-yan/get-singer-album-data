<template>
  <Hearder msg="Find your favorite singer album"/>
  <AlbumnList />
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AlbumnList from './components/list/AlbumnList.vue';
import Hearder from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Hearder,
    AlbumnList,
  },
});
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
</style>
