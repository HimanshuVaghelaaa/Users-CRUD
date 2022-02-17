<template>
  <div class="d-flex justify-content-between table-pagination">
    <b-form-select
      class="per-page-select mr-2"
      v-model="localePerPage"
      :options="perPageOptions"
      @change="onPaginationChange"
    />
    <div v-if="totalRows > 0">
      Displaying <b>{{ from }}</b> - <b>{{ Math.min(to, totalRows) }}</b> out of
      <b>{{ totalRows }}</b>
    </div>
    <b-pagination
      class="mb-0"
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="localePerPage"
      @input="onPaginationChange"
    />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  name: "TablePagination",
  props: {
    totalRows: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      localePerPage: 50,
      currentPage: 1,
      perPageOptions: [1, 5, 10, 20, 50, 100],
    };
  },
  computed: {
    ...mapState(["perPage"]),
    from() {
      return (this.currentPage - 1) * this.localePerPage + 1;
    },
    to() {
      return this.currentPage * this.localePerPage;
    },
  },
  watch: {
    perPage() {
      this.localePerPage = this.perPage;
    },
  },
  methods: {
    ...mapActions(["changePerPage"]),
    onPaginationChange() {
      this.changePerPage(this.localePerPage);
      this.$emit("on-pagination-change", this.currentPage);
    },
  },
  mounted() {
    if (this.perPage) {
      this.localePerPage = this.perPage;
    }
  },
};
</script>

<style lang="scss" scoped>
.table-pagination {
  padding: 20px;
  align-items: baseline;
}

.per-page-select {
  width: 100px;
}
</style>
