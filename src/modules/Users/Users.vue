<template>
  <b-card no-body class="users">
    <b-card-header>
      <div class="d-flex justify-content-between align-items-center">
        <h5>Users</h5>
        <b-button class="mr-1" variant="info" @click="onCreateUserClick">
          Create User
        </b-button>
      </div>
    </b-card-header>
    <b-card-body class="users-card-body">
      <no-content :show="!users.length" />
      <b-table
        v-if="users.length"
        class="mr-3 ml-3 mb-0 pb-0"
        responsive="sm"
        :fields="fields"
        :items="users"
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
        v-if="users.length"
        ref="pagination"
        :total-rows="users.length"
        @on-pagination-change="onPaginationChange"
      >
      </table-pagination>
    </b-card-body>
    <user-modal />
  </b-card>
</template>

<script>
import UserModal from "./modals/UserModal";
import { createNamespacedHelpers } from "vuex";
import TablePagination from "../../core/components/table-pagination/TablePagination";
import NoContent from "../../core/components/no-content/NoContent";

const { mapActions } = createNamespacedHelpers("users");
export default {
  name: "Users",
  components: { NoContent, TablePagination, UserModal },
  data() {
    return {
      users: [],
      fields: [
        { key: "name", label: "Name" },
        { key: "surname", label: "Surname" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone Number" },
        { key: "actions", label: "Action" },
      ],
    };
  },
  methods: {
    ...mapActions(["showUserModal"]),
    onCreateUserClick() {
      this.showUserModal();
    },
    onEditUserClick() {},
    onDeleteUserClick() {},
    onPaginationChange() {},
  },
};
</script>

<style lang="scss" scoped>
.users {
  height: 100%;
  width: 100%;
  //margin: 2rem;
}

.users-card-body {
  background: white;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.page-content {
  margin-left: 15%;
  margin-right: 15%;
  position: relative;
}
</style>
