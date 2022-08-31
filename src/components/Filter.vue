<template>
  <input 
    placeholder="Filter by author..."
    v-model="filter"
  />
  <button
    v-if="filter"
    @click="clearInput()"
  >X</button>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'

  const emit = defineEmits(['filterPosts'])
  const filter = ref<string>('')

  const clearInput = () => filter.value = ''

  watch(filter, (currentValue) => {
    emit('filterPosts', currentValue)
  });
</script>