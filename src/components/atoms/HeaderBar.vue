<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  }
});
</script>
<template>
  <header>
    <h1>{{ name }}</h1>
  </header>
</template>

<style scoped>
header {
  color: var(--color-white);
  background: var(--color-header);
  padding: 1.5rem;
}
h1 {
  font-size: 2rem;
  text-align: left;
}
</style>
