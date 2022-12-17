<template>
  <img :src="album.artworkUrl100" alt="Image">
  <h3 class="album-list__title">Album Name: {{ album.collectionName }}</h3>
  <p class="album-list__text">Price: {{ album.collectionPrice }} {{ album.currency }}</p>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {Result} from '../../types/data.interface';


export default defineComponent({
  // type inference enabled
  props: {
    album: {
      type: Object as PropType<Result>,
      required: true
    },
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.album-list__title {
  font-size: 20px;
  color: #2e0838;
}
.album-list__text{
   font-size: 20px;
   font-weight: 400;
   color: #2e0838;
}
/*img {*/
/*  width: 100%;*/
/*  !*min-width: 0;*!*/
/*  border-radius: 16px;*/
/*}*/
</style>