<template>
  <div class="symbol-group">
    <div class="symbol" v-for="(symbol, index) in symbols" :key="index">
      <img :src="symbol" alt="" />
    </div>
    <div class="symbol">
      <a>{{ count }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['symbols', 'count'],
  setup() {}
}
</script>
