<template lang="pug">
  #app.container
    aside
      h4.navigation-header APIs
      ul.nav.flex-column
        li.nav-item(v-for="api in apis")
          router-link.nav-link(
            :to="{name: 'api.info', params: {id: api.id}}",
          ) {{api.label}}

      .add-api-button
        router-link.btn.btn-outline-primary.btn-block(
          :to="{name: 'api.new'}",
          @click="onBeforeLeave",
        ) New API

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
