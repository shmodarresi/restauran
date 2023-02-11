<script lang="ts">
import HeaderBar from '@/components/atoms/HeaderBar.vue';
import Restaurant from '@/components/organisms/Restaurant.vue';
import { defineComponent } from 'vue';
import restaurantData from '@/data/data.json';
import Loading from '@/components/atoms/Loading.vue';
export default defineComponent({
  data() {
    return {
      restaurants: restaurantData.data.search.business
    };
  },
  components: { Restaurant, HeaderBar, Loading }
});
</script>

<template>
  <HeaderBar name="Resturant Finder" />
  <Loading v-if="!restaurants || restaurants.length === 0" />
  <Restaurant v-else :restaurants="restaurants" />
</template>
