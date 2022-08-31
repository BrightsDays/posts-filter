<template>
  <div class="filter">
    <input
      class="filter__input"
      placeholder="Filter by author..."
      v-model="filter"
    />
    <button
      class="filter__clear"
      v-if="filter"
      @click="clearInput()"
    >X</button>
  </div>
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

<style lang="scss" scoped>
  .filter {
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 400px;

    &__input {
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      border: 1px solid grey;
      border-radius: 5px;
    }

    &__clear {
      position: absolute;
      top: 10px;
      right: 12px;
      padding: 0;
      background: none;
    }
  }
</style>