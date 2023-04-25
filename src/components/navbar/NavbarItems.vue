<template>
  <div class="ai__navbar-container" :class="{ 'mobile-menu': mq.xs }">
    <ul
      class="ai__navbar-links"
      :class="{ 'mobile-menu': mq.smPlus && mq.lgMinus }"
    >
      <li
        :style="{ '--fade': fadeTransition(index) + 's' }"
        v-for="(link, href, index) in Links"
        class="ai__link-style"
        :key="link"
      >
        <a :href="`#${href}`">{{ link }}</a>
      </li>
    </ul>

    <div class="ai__navbar-auth">
      <a class="ai__link-style">Sign in</a>
      <a class="ai__button-style ai__link-style">Sign Up</a>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["mq"],

  setup() {
    const Links = {
      home: "Home",
      wgpt3: "What is GPT?",
      possibility: "Open AI",
      features: "Case Studies",
      blog: "Library",
    };

    function fadeTransition(index) {
      return parseFloat(index * 0.2).toFixed(1);
    }

    return { Links, fadeTransition };
  },
};
</script>
