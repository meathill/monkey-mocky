<template lang="pug">
#app.container
  nav.navbar.navbar-light.bg-light.navbar-expand-md
    router-link.navbar-brand(:to="{name: 'home'}") Mocky Monkey

    ul.navbar-nav
      router-link.nav-item(
        tag="li",
        active-class="active",
        :to="{name: 'api'}",
      )
        a.nav-link APIs

      router-link.nav-item(
        tag="li",
        :to="{name: 'about'}",
        active-class="active",
      )
        a.nav-link About

  router-view.main-content
</template>

<script>
export default {
  data() {
    return {
      apis: [],
    };
  },

  methods: {
    onBeforeLeave() {

    },
  },
}
</script>
