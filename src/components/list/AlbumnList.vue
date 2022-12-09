<template>
  <form @submit.prevent="handleSearch(searchText)">
    <input type="text" v-model="searchText" />
<!--    <button @click="handleSearch(searchText)">Search</button>-->
    <BaseButton title="search" :class-name="btn"/>
    <ul v-if="data.results">
      <li v-for="item in data.results" :key="item.artistId">
        <AlbumItem :album="item" />
      </li>
    </ul>
  </form>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from 'vue';
import {SearchDataInterface} from '../../types/data.interface';
import {searchService} from '../../services/search.service';
import AlbumItem from '../item/AlbumItem.vue';
import BaseButton from '../../UI/button/BaseButton.vue';
 export default defineComponent({
   components: {
     AlbumItem,
     BaseButton,
   },
   setup() {// composition api
     let albums = reactive<{data: SearchDataInterface}>({data: {}})
     let searchText = ref('');
     const handleSearch = async (search: string): Promise<void> => {
       const value = await searchService(search);
       albums.data = value;
     }

     return {
       handleSearch, ...toRefs(albums), searchText
     }
   }
 });
</script>

<style scoped>
.btn {
  background: #42b983;
}
input {
  display: inline-block;
  box-sizing: border-box;
  font-size: 14px;
  resize: vertical;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  padding: 16px 25px;
  outline: none;
  /*width: 100%;*/
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
</style>