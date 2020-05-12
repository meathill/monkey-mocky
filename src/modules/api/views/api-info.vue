<template lang="pug">
.api-info
  header
    h3 {{id ? formData.path : 'New API'}}

  form(@submit.prevent="doSubmit")
    .form-group.row
      label.col-form-label.col-sm-2.text-right(for="path") Path
      .col-sm-6
        input#path.form-control(
          v-model="formData.path",
          placeholder="/posts",
          required,
        )

    .form-group.row
      label.col-form-label.col-sm-2.text-right Methods
      .col-sm-8.toggle-buttons
        template(v-for="(label, key) in CRUD")
          input(
            hidden,
            type="checkbox",
            v-model="formData.crud",
            name="crud",
            :id="'crud-' + key",
            :value="key"
          )
          label.btn.btn-outline-secondary.mr-2(:for="'crud-' + key") {{label}}

    .form-group.row
      label.col-form-label.col-sm-2.text-right Fields
      .col-sm-10
        table.table.table-hover.table-sm
          thead.thead-light
            tr
              th Name
              th Type
              th Optional
              th Default
              th Details
              th
          tbody
            tr(v-for="(field, index) in fields")
              td {{field.name}}
              td {{field.type}}
              td {{field.optional}}
              td {{field.default}}
              td
              td
                .btn-group-sm
                  button.btn.btn-danger(
                    type="button",
                    @click="doRemoveField(field, index)",
                  )
                    i.fas.fa-trash
          tfoot
            tr
              td(colspan="6")
                button.btn.btn-info(
                  type="button",
                  @click="doAddField()",
                )
                  i.fas.fa-plus.mr-2
                  | Add new field

    .form-group.row
      .col-sm-10.offset-sm-2
        button.btn.btn-primary(
          :disabled="isSaving",
        )
          i.fas.mr-2(:class="isSaving ? 'fa-spin fa-spinner' : 'fa-check'")
          | {{id ? 'Save' : 'Create'}}

        button.btn.btn-link.btn-sm.ml-5(
          type="button",
          @click="doCancel",
        )
          i.fas.fa-times.mr-2
          | Cancel
</template>

<script>
import defaults from 'lodash/defaults';
import {CRUD} from '@/data/api';

export default {
  computed: {
    id() {
      const {id} = this.$route.params;
      return isNaN(id) ? null : Number(id);
    },
  },

  data() {
    return {
      CRUD,
      isSaving: false,
      formData: null,
    };
  },

  methods: {
    doAddField() {

    },
    doRemoveField(field, index) {

    },
    doSubmit() {

    },
    doCancel() {

    },

    processData() {
      this.formData = defaults({}, {
        path: '',
        crud: ['c', 'r', 'u', 'd'],
        fields: [],
      });
    },
  },

  beforeMount() {
    this.processData();
  },
};
</script>
