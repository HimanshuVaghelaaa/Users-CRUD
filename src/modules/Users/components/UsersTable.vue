<template>
  <b-card no-body class="table-responsive mb-0">
    <no-content :show="!localItems.length" />
    <b-table
      v-if="localItems.length"
      class="mb-0 pb-0"
      responsive="sm"
      :fields="fields"
      :items="localItems"
      striped
    >
      <template v-slot:cell(actions)="{ item }">
        <b-button
          variant="success"
          class="mr-1"
          size="sm"
          @click="onEditUserClick(item)"
        >
          Edit
        </b-button>
        <b-button
          variant="danger"
          class="mr-1"
          size="sm"
          @click="onDeleteUserClick(item)"
        >
          Delete
        </b-button>
      </template>
    </b-table>
    <table-pagination
      v-if="localItems.length"
      ref="pagination"
      :total-rows="items.length"
      @on-pagination-change="onPaginationChange"
    />
  </b-card>
</template>

<script>
import TablePagination from "../../../core/components/table-pagination/TablePagination";
import NoContent from "../../../core/components/no-content/NoContent";
import _ from "lodash";

export default {
  name: "UsersTable",
  components: { NoContent, TablePagination },
  props: {
    fields: {
      type: Array,
      require: true,
    },
    items: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
      localItems: [],
      perPage: null,
    };
  },
  watch: {
    items() {
      this.localItems = _.cloneDeep(this.items);
      if (this.perPage) {
        this.onPaginationChange(this.perPage, 1);
        this.$refs.pagination.currentPage = 1;
      }
    },
  },
  methods: {
    onEditUserClick() {
      this.$emit("on-edit-click");
    },
    onDeleteUserClick() {
      this.$emit("on-delete-click");
    },
    onPaginationChange(perPage, currentPage) {
      this.perPage = perPage;
      this.localItems = this.items.filter((item, index) => {
        return (
          index >= (currentPage - 1) * perPage &&
          index <= currentPage * perPage - 1
        );
      });
    },
  },
  mounted() {
    this.localItems = _.cloneDeep(this.items);
  },
};
</script>

<style lang="scss">
.table-responsive {
  height: 100%;
}
.table-responsive-sm {
  height: 91%;
  overflow: auto;
  > table {
    > thead {
      > tr {
        > th {
          //position: sticky;
          //z-index: 10;
          //top: 0;
          padding: 6px;
          white-space: nowrap;
          &:focus {
            outline: none;
          }
        }
      }
    }
    > tbody {
      > tr {
        > td {
          padding: 8px;
          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
