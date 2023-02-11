<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Restaurant } from '../../interfaces/index';
import ReviewItem from '../atoms/ReviewItem.vue';
import IconPhone from '../icons/IconPhone.vue';
import IconMarker from '../icons/IconMarker.vue';
import IconArrow from '../icons/IconArrow.vue';

export default defineComponent({
  props: {
    restaurant: {
      type: Object as PropType<Restaurant>,
      required: true
    }
  },
  methods: {
    handleBack() {
      this.$emit('backToList');
    }
  },
  components: { ReviewItem, IconPhone, IconMarker, IconArrow }
});
</script>
<template>
  <div class="restaurant-detail">
    <button @click="handleBack"><IconArrow /> back</button>
    <section class="main-info">
      <section class="main-text">
        <h2>
          <a :href="restaurant.url" target="_blank">{{ restaurant.name }}</a>
        </h2>
        <span aria-label="total-rating"
          ><strong>Rating:</strong> {{ restaurant.rating }}</span
        >
        <address class="inline-flex">
          <IconMarker />{{ restaurant.location.formatted_address }}
        </address>
        <span aria-label="phone" class="inline-flex"
          ><IconPhone />{{ restaurant.phone }}</span
        >
      </section>
      <div>
        <img :src="restaurant.photos[0]" :alt="restaurant.name" />
      </div>
    </section>
    <template v-if="restaurant.reviews && restaurant.reviews.length > 0">
      <h3>Reviews</h3>
      <ul>
        <ReviewItem
          v-for="(review, index) in restaurant.reviews"
          :key="index"
          :item="review"
        />
      </ul>
    </template>
  </div>
</template>

<style scoped>
.main-info {
  display: grid;
  grid-template-columns: auto 30%;
}
.main-info > *:not(.main-text) {
  grid-column: 2;
  justify-self: end;
}

img {
  max-width: 100%;
  max-height: 200px;
}
.main-text {
  display: grid;
  grid-gap: var(--section-gap);
  align-self: baseline;
}
.restaurant-detail {
  padding: 2rem;
}

h3 {
  margin: 2rem 0 1rem;
}
.inline-flex > *:first-child {
  margin-right: 5px;
  flex: 0 0 var(--icon-size);
}

ul {
  padding-left: 1rem;
}

button {
  display: none;
  border: none;
  box-shadow: none;
  text-decoration: underline;
  font-size: 0.8rem;
  background: transparent;
  color: var(--color-text);
  margin-bottom: 1rem;
}

@media (max-width: 767px) {
  .restaurant-detail {
    padding: 1rem;
  }

  .main-info {
    grid-template-columns: auto 30%;
  }
  button {
    display: flex;
    align-items: center;
  }
}
</style>
