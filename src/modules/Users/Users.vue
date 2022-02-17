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
    <b-card-body class="users-card-body pr-3 pl-3 pt-3">
      <view-spinner :show="tableLoading" />
      <users-table
        v-if="!tableLoading"
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
import { createNamespacedHelpers } from "vuex";
import UsersTable from "./components/UsersTable";
import ViewSpinner from "../../core/components/view-spinner/view-spinner";

const { mapActions, mapState } = createNamespacedHelpers("users");
export default {
  name: "Users",
  components: { ViewSpinner, UsersTable, UserModal },
  data() {
    return {
      fields: [
        { key: "name", label: "Name" },
        { key: "surname", label: "Surname" },
        { key: "email", label: "Email" },
        { key: "phone", label: "Phone Number" },
        { key: "actions", label: "Action" },
      ],
    };
  },
  computed: {
    ...mapState(["users", "tableLoading"]),
  },
  methods: {
    ...mapActions(["showUserModal", "getUsersData", "deleteUser"]),
    onCreateUserClick() {
      this.showUserModal();
    },
    onEditUserClick(item) {
      this.$router.push({ name: "updateUser", params: { userId: item.id } });
    },
    async onDeleteUserClick(item) {
      const confirm = await this.$confirm(
        "Are you sure you want to delete following user?",
        "Deleting User"
      );
      if (confirm) {
        const { success } = await this.deleteUser(item.id);
        if (success) {
          this.$toast("User deleted successfully");
        } else {
          this.$toast("Unable to delete user", "danger");
        }
      }
    },
  },
  mounted() {
    this.getUsersData();
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
