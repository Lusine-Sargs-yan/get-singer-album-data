<template>
  <form @submit.prevent="handleSearch(searchText)">
    <input type="text" v-model="searchText" />
<!--    <button @click="handleSearch(searchText)">Search</button>-->
    <BaseButton title="search" />
    <ul v-if="data.results" class="album-list__items">
      <li v-for="item in data.results" :key="item.artistId" class="album-list__item">
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

.album-list__item {
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #2e0838;
  border-radius: 16px;
  flex: 0 0 25%;
}
.album-list__items {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>