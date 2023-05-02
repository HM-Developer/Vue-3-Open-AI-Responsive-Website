<template>
  <div class="ai__footer-grid">
    <h4>{{ content.title }}</h4>
    <ul>
      <li v-for="(href, link, index) in content.links" :key="index" :href="href">{{ link }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['content']
}
</script>
