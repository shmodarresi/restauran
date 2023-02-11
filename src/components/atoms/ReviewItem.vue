<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Review } from '../../interfaces/index';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Review>,
      required: true
    }
  }
});
</script>
<template>
  <li>
    <span aria-label="rating"><strong>Rating:</strong> {{ item.rating }}</span>
    <p class="comment">{{ item.text }}</p>
  </li>
</template>

<style scoped>
li {
  padding: 1rem 0;
}
.comment {
  padding-top: 0.5rem;
}
</style>
