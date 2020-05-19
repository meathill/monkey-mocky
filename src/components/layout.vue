<template lang="pug">
.layout-with-sidebar
  aside
    h4.navigation-header {{title}}
    ul.nav.flex-column
      router-link.nav-item(
        v-for="nav in navs",
        tag="li",
        :key="nav.id",
        :to="{name: nav.name, params: {id: nav.id}}",
      )
        a.nav-link {{nav.label}}

    .add-item-button(v-if="newItemRoute")
      router-link.btn.btn-outline-primary.btn-block(
        :to="{name: newItemRoute}",
      )
        i.fas.fa-plus.mr-2
        | New {{title}}

  router-view.content-container
</template>

<script>
export default {
  data() {
    return {
      title: '',
      navs: [],
      newItemRoute: '',
    };
  },

  beforeRouteUpdate(to, from, next) {
    next();
  },
}
</script>
