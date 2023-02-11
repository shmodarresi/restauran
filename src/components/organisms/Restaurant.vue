<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Restaurant } from '../../interfaces/index';
import RestaurantList from '@/components/molecules/ResturantList.vue';
import RestaurantDetail from '@/components/molecules/ResturantDetail.vue';

export default defineComponent({
  components: {
    RestaurantList,
    RestaurantDetail
  },
  props: {
    restaurants: {
      type: Array as PropType<Restaurant[]>,
      required: true
    }
  },
  data() {
    return {
      selectedRestaurant: this.restaurants[0],
      isClicked: false
    };
  },
  methods: {
    handleRestaurantClick(id: string) {
      this.selectedRestaurant = this.restaurants.filter(
        (item) => item.id === id
      )[0];
      this.isClicked = true;
    },
    handleBackToList() {
      this.isClicked = false;
    }
  }
});
</script>

<template>
  <main class="main-page">
    <div class="left-col" :class="{ hide: isClicked }" ref="list">
      <h2>{{ restaurants.length }} Restaurant</h2>
      <RestaurantList
        :restaurants="restaurants"
        @restaurantClick="handleRestaurantClick"
      />
    </div>
    <div class="right-col" :class="{ show: isClicked }" ref="detail">
      <RestaurantDetail
        v-if="selectedRestaurant"
        :restaurant="selectedRestaurant"
        @backToList="handleBackToList"
      />
    </div>
  </main>
</template>

<style scoped>
.main-page {
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: calc(100vh - 100px);
}

.left-col {
  border-right: solid 1px var(--color-border);
  max-height: 100%;
  overflow-y: auto;
}

h2 {
  background-color: var(--color-gray-soft);
  color: var(--color-black-soft);
  padding: 0.5rem;
  font-weight: bold;
  position: sticky;
  top: 0;
  z-index: 1;
}

@media (max-width: 767px) {
  .main-page {
    display: flex;
    overflow-x: hidden;
  }

  .right-col,
  .left-col {
    transition: translate 0.1s;
    flex: 0 0 100%;
  }

  .right-col,
  .left-col {
    translate: 0 0px;
  }

  .right-col.show {
    translate: -100% 0px;
  }

  .left-col.hide {
    translate: -100% 0px;
  }
}
</style>
