<template>
  <button class="base-button">
    <slot> {{ title }}</slot>
  </button>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";

interface ButtonInterface {
  title: string;
  className: string;
  disabled: boolean;
  type: string;
  handleClick(): any;// or void
}

export default defineComponent({
  props: {
    title: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
    className: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
    disabled: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
    type: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
    handleClick: {
      type: Object as PropType<ButtonInterface>,
      required: true,
    },
  }
});
</script>

<style scoped>
.base-button {
  border: none;
  color: #ffffff;
  padding: 16px 25px;
  cursor: pointer;
  background: #e0b3de;
  box-shadow: 2px 3px 3px rgb(0 0 0 / 19%);
  border-radius: 13px;
  font-family: Montserrat arm;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  outline: none;
}
</style>