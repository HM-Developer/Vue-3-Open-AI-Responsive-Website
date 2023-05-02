<template>
  <section id="footer">
    <div class="ai__footer-heading">
      <h1 class="gradient_text">Do you want to step in to the future before others</h1>
      <button class="ai__footer-request">Request Early Access</button>
    </div>
    <div class="ai__footer-container">
      <div class="ai__footer-content">
        <div class="ai__footer-grid">
          <img src="@/assets/svg/logo.svg" alt="GPT-3" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <FooterGrid v-for="(links, index) in contents" :key="index" :content="links"></FooterGrid>
      </div>
      <div class="ai__footer-copyrights">© 2021 GPT-3. All rights reserved.</div>
    </div>
  </section>
</template>
<script>
import FooterGrid from './Footer-Grid.vue'
export default {
  components: { FooterGrid },

  setup() {
    const contents = [
      {
        title: 'Links',
        links: {
          Overons: '#Overons',
          'Social Media': '#Social-Media',
          Counters: '#Counters',
          Contact: '#Contact'
        }
      },
      {
        title: 'Company',
        links: {
          'Terms & Conditions': '#Terms',
          'Privacy Policy': '#Privacy',
          Contact: '#Contact'
        }
      },
      {
        title: 'Get in touch',
        links: {
          'Crechterwoord K12 182 DK Alknjkcb': '#address',
          '085-132567': '#phone',
          'info@payme.net': '#email'
        }
      }
    ]

    return { contents }
  }
}
</script>
