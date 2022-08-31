<template>
  <div>
    <Filter @filter-posts="filterPosts" />

    <h3 v-if="!postList">Wait for loading posts...</h3>

    <template v-if="postsForShow.length">
      <div v-for="post in postsForShow">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
        <p>Author: {{ post.userName }}</p>
      </div>

      <button
        v-if="filteredPosts.length > postsForShow.length"
        @click="showMore()"
      >Show more</button>
    </template>

    <h3 v-else>Cant find this author</h3>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/reactivity'  
  import { onMounted, ref } from 'vue'
  import posts from '../services/posts'
  import users from '../services/users'
  import { Post, Author } from '../types'
  import Filter from './Filter.vue'

  const postList = ref<Post[]>([])
  const author = ref<string>('')
  const length = ref<number>(5)

  const filteredPosts = computed(() => {
    return postList.value
      .filter(post => post.userName && post.userName.includes(author.value))
  })

  const postsForShow = computed(() => {
    return filteredPosts.value?.slice(0, length.value)
  })

  const filterPosts = (value: string) => {
    author.value = value
    length.value = 5
  }

  const showMore = () => {
    length.value = length.value + 5
  }

  onMounted(async () => {
    postList.value = await posts.getAll()
    const authors: Author[] = await users.getAll()

    postList.value.forEach(post => {
      post.userName = authors.filter(author => author.id === post.userId)[0].username
    })
  })
</script>