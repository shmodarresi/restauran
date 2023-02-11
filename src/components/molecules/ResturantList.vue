<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { RestaurantListItem } from '../../interfaces/index';
import RestaurantItem from '../atoms/RestaurantItem.vue';

export default defineComponent({
  props: {
    restaurants: {
      type: Object as PropType<RestaurantListItem[]>,
      required: true
    }
  },
  mounted() {
    this.restaurants;
  },
  methods: {
    handleRestaurantClick(id: string) {
      this.$emit('restaurantClick', id);
    }
  },
  components: { RestaurantItem }
});
</script>
<template>
  <ul>
    <RestaurantItem
      v-for="resturant in restaurants"
      :item="resturant"
      :key="resturant.id"
      @click="handleRestaurantClick(resturant.id)"
    />
  </ul>
</template>
