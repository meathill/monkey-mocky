<template lang="pug">
.api-info
  header
    h3 {{id ? formData.path : 'New API'}}

  form(@submit.prevent="doSubmit")
    .form-group.row
      label.col-form-label.col-sm-2.text-right Path
      .col-sm-6
        input.form-control(
          v-model="formData.path",
          placeholder="/posts",
          required,
        )
</template>

<script>
export default {
  computed: {
    id() {
      const {id} = this.$route.params;
      return isNaN(id) ? null : Number(id);
    },
  },

  data() {
    return {
      formData: {},
    };
  },

  methods: {
    doSubmit() {

    },
  },
}
</script>
