<template lang="pug">
.layout-with-sidebar
  aside
    h4.navigation-header {{title}}
    ul.nav.flex-column
      li.nav-item(v-for="nav in navs")
        router-link.nav-link(
          :to="{name: nav.name, params: {id: name.id}}",
        ) {{nav.label}}

    .add-item-button
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
