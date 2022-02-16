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
    <b-card-body class="users-card-body pr-2 pl-2 pt-2">
      <users-table
        :fields="fields"
        :items="users"
        @on-delete-click="onDeleteUserClick"
        @on-edit-click="onEditUserClick"
      >
      </users-table>
    </b-card-body>
    <user-modal />
  </b-card>
</template>

<script>
import UserModal from "./modals/UserModal";
import UsersTable from "./components/UsersTable";
import { createNamespacedHelpers } from "vuex";

const { mapActions } = createNamespacedHelpers("users");
export default {
  name: "Users",
  components: { UsersTable, UserModal },
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
    async onDeleteUserClick() {
      const confirm = await this.$confirm(
        "Are you sure you want to delete following user?",
        "Deleting User"
      );
      if (confirm) {
        console.log("User Deleted successfully");
      }
    },
  },
};
</script>

<style lang="scss">
.users {
  height: 100%;
  width: 100%;
}
.users-card-body {
  background: #e8e8e8;
  padding: 0;
  overflow: auto;
}
</style>
