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
  data() {
    return { selectedId: this.restaurants[0].id };
  },
  mounted() {
    this.restaurants;
    this.selectedId;
  },
  methods: {
    handleRestaurantClick(id: string) {
      this.$emit('restaurantClick', id);
      this.selectedId = id;
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
      :is-selected="resturant.id === selectedId"
      @click="handleRestaurantClick(resturant.id)"
    />
  </ul>
</template>
