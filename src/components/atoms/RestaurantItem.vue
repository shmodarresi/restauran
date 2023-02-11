<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { RestaurantListItem } from '../../interfaces/index';
import IconMarker from '../icons/IconMarker.vue';

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<RestaurantListItem>,
      required: true
    }
  },
  components: { IconMarker }
});
</script>
<template>
  <li>
    <h2>{{ item.name }}</h2>
    <address>
      <IconMarker />
      {{ item.location.formatted_address }}
    </address>
  </li>
</template>

<style scoped>
li {
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-bottom: solid 1px var(--color-border);
}
</style>
