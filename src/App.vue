<template>
  <Hearder msg="Find your favorite singer albums"/>
  <AlbumnList />
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs } from 'vue';
import {searchService} from  './services/search.service';
import { SearchDataInterface } from './types/data.interface';
import AlbumnList from './components/list/AlbumnList.vue';
import Hearder from './components/Header.vue'
export default defineComponent({
  name: 'App',
  components: {
    Hearder,
    AlbumnList,
  },
  setup() {// composition api
    let albums = reactive<{data: SearchDataInterface}>({data: {}})
    let searchText = ref('');
    const handleSearch = async (search: string): Promise<void> => {
      const value = await searchService(search);
      albums.data = value;
      console.log(value, 'value')
      console.log('data', albums)
    }

    return {
      handleSearch, ...toRefs(albums), searchText
    }
  }
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
