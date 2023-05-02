<template>
  <div class="ai__blog-box">
    <img class="ai__blog-img" :src="blog.img" :alt="blog.title" />
    <div class="ai__blog-body">
      <div class="ai__blog-content">
        <p class="ai__blog-date">{{ blog.date }}</p>
        <h2 class="ai__blog-title">{{ blog.title }}</h2>
      </div>
      <a href="#" class="ai__blog-full">Read Full Article</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blog']
}
</script>
