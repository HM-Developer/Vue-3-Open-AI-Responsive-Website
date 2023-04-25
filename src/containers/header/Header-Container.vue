<template>
  <div class="ai__header section__padding" id="Home">
    <div class="ai__header-content">
      <Typed :options="titleOptions">
        <h1 class="typing gradient_text ai__header-title"></h1>
      </Typed>
      <p class="ai_header-desc">
        Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise
        blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years
        to order allow asked of.
      </p>
      <div class="ai__header-input">
        <input type="email" name="email" placeholder="Your Email Address?" />
        <button type="button">Get Started</button>
      </div>

      <div class="ai__header-symbols">
        <SymbolGroub :symbols="symbols" :count="count"></SymbolGroub>
        <p class="symbol-desc">1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
    <div class="ai__header-image">
      <img src="@/assets/png/ai.png" alt="Ai" />
    </div>
  </div>
</template>

<script>
import SymbolGroub from '@/components/SymbolGroub.vue'
import { Typed } from '@duskmoon/vue3-typed-js'
export default {
  components: { SymbolGroub, Typed },

  setup() {
    const symbols = [
      new URL('@/assets/jpg/symbols/1.jpg', import.meta.url).href,
      new URL('@/assets/jpg/symbols/2.jpg', import.meta.url).href,
      new URL('@/assets/jpg/symbols/3.jpg', import.meta.url).href,
      new URL('@/assets/jpg/symbols/4.jpg', import.meta.url).href,
      new URL('@/assets/jpg/symbols/5.jpg', import.meta.url).href,
      new URL('@/assets/jpg/symbols/6.jpg', import.meta.url).href
    ]

    const count = '1.6k+'
    const titleOptions = {
      strings: ['Let’s Build Something amazing with GPT-3 OpenAI'],
      typeSpeed: 10,
      showCursor: false
    }

    return { symbols, count, titleOptions }
  }
}
</script>
