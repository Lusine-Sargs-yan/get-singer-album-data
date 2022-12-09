<template>
  <h3>Album Name: {{ album.collectionName }}</h3>
  <img :src="album.artworkUrl100" alt="Image">
  <p>Price: {{ album.collectionPrice }} {{ album.currency }}</p>

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

</style>