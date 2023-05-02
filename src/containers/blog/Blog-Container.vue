<template>
  <section id="blog" class="section__margin">
    <div class="ai__blog_heading gradient_text">A lot is happening, We are blogging about it.</div>
    <div class="ai__blog-container">
      <div class="ai__blog-left">
        <VBlog :blog="leftBlog"></VBlog>
      </div>
      <div class="ai__blog-right">
        <VBlog v-for="(blog, index) in rightBlogs" :key="index" :blog="blog"></VBlog>
      </div>
    </div>
  </section>
</template>

<script>
import VBlog from './V-Blog.vue'

export default {
  components: { VBlog },

  setup() {
    const leftBlog = {
      img: new URL('@/assets/png//blog01.png', import.meta.url).href,
      date: 'Sep 26, 2021',
      title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
    }

    const rightBlogs = [
      {
        img: new URL('@/assets/png//blog02.png', import.meta.url).href,
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
      },
      {
        img: new URL('@/assets/png/blog03.png', import.meta.url).href,
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
      },
      {
        img: new URL('@/assets/png/blog04.png', import.meta.url).href,
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
      },
      {
        img: new URL('@/assets/png/blog05.png', import.meta.url).href,
        date: 'Sep 26, 2021',
        title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
      }
    ]

    return { leftBlog, rightBlogs }
  }
}
</script>
