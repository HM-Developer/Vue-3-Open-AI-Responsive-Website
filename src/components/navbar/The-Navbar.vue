<template>
  <div class="ai__navbar section__padding" :class="{ active: menuState }">
    <div class="ai__navbar-links-logo flex__center">
      <img src="@/assets/svg/logo.svg" alt="Logo" />
    </div>
    <NavbarItems></NavbarItems>

    <div
      class="ai__navbar-menu-icon"
      :class="{ active: menuState }"
      @click="toggleMenu"
    >
      <div class="ai__navbar-line"></div>
      <div class="ai__navbar-line"></div>
      <div class="ai__navbar-line"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "vue";

import NavbarItems from "./NavbarItems.vue";

export default {
  components: {
    NavbarItems,
  },
  setup() {
    const menuState = ref(false);
    const menuClass = computed(() =>
      menuState.value ? "la-times" : "la-bars"
    );

    function toggleMenu() {
      menuState.value = !menuState.value;
    }

    return { menuState, menuClass, toggleMenu };
  },
};
</script>
