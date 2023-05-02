<template>
  <section id="brand-section" class="flex__center">
    <div class="brands">
      <img class="brand" v-for="(brand, index) in brands" :key="index" :src="brand" />
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    const brands = [
      new URL('@/assets/png/brands/google.png', import.meta.url).href,
      new URL('@/assets/png/brands/slack.png', import.meta.url).href,
      new URL('@/assets/png/brands/shopify.png', import.meta.url).href,
      new URL('@/assets/png/brands/dropbox.png', import.meta.url).href,
      new URL('@/assets/png/brands/atlassian.png', import.meta.url).href
    ]

    return { brands }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/base/variabels';
@import '@/style/base/mixins';
#brand-section {
  margin: 4rem 0;
  .brands {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .brand {
      margin: 0 2rem;
      // height: 30px;
    }
  }
  @include media-breakpoint-down(lg) {
    .brand {
      width: 90px;
      margin: 0 10px !important;
    }
  }
  @include media-breakpoint-down(sm) {
    .brand {
      width: 50px;
      margin: 0 10px !important;
    }
  }
}
</style>
>
