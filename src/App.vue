<template>
  <div>
    <div class="breakpoint">{{ breakpoint.current }}</div>
    <div class="breakpoint buttom">{{ breakpoint.current }}</div>

    <div class="gpt-app">
      <div class="gradient_bg">
        <Navbar />
        <Headerx />
      </div>
      <Brand />
      <WhatGpt3 />
      <Feature />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  </div>
</template>

<style lang="scss"></style>

<script lang="ts">
import * as Containers from '@/containers/index'
import { Navbar, Cta, Brand } from '@/components/index'
import { inject } from 'vue'

export default {
  components: {
    ...Containers,
    Navbar,
    Brand,
    Cta
  },
  setup() {
    // @ts-ignore

    const breakpoint = inject('mq') as { [key: string]: any }
    return { breakpoint }
  }
}
</script>
