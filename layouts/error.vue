<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">{{ $t('page_not_found') }}</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">{{ $t('home_page') }}</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>