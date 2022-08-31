<template>
  <div>
    <Filter />
    <h3 v-if="!postList">Wait for loading posts...</h3>
    <div v-else v-for="post in postList">
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import posts from '../services/posts'
  import { Post } from '../types'
  import Filter from './Filter.vue';

  const postList = ref<Post[]>([])

  onMounted(async () => {
    postList.value = await posts.getAll()
  })
</script>