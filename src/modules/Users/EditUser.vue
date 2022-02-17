<template>
  <ValidationObserver ref="user-modal" v-slot="{ handleSubmit }">
    <view-spinner :show="editPageLoading" fullscreen />
    <b-card v-if="!editPageLoading" no-body class="edit-card">
      <b-card-header>
        <div class="d-flex justify-content-between align-items-center">
          <b-button
            variant="light"
            class="mr-3"
            @click="$router.push({ name: 'users' })"
          >
            <i class="fas fa-chevron-left" />
            Back
          </b-button>
          User ID: {{ model.id }}
        </div>
      </b-card-header>
      <b-card-body>
        <b-form @keydown.enter.prevent="handleSubmit(onSubmit)">
          <div class="row">
            <div class="col-md-12">
              <div class="row">
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="name"
                    :autofocus="true"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="surname"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="email"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="password"
                    type="password"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="username"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="phone"
                    :placeholder="false"
                  />
                </div>
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="phone_country_code"
                    :placeholder="false"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <input-widget
                    :model="model"
                    attribute="image"
                    type="file"
                    :placeholder="'Choose image or drop here...'"
                  >
                  </input-widget>
                </div>
              </div>
            </div>
          </div>
        </b-form>
      </b-card-body>
      <b-card-footer>
        <div class="float-right">
          <b-button
            variant="danger"
            class="mr-2"
            @click="$router.push({ name: 'users' })"
          >
            Cancel
          </b-button>
          <b-button variant="info" class="mr-2" @click="onSubmit">
            Submit
          </b-button>
        </div>
      </b-card-footer>
    </b-card>
  </ValidationObserver>
</template>

<script>
import UserModel from "./models/UserModel";
import InputWidget from "../../core/components/input-widget/InputWidget";
import { createNamespacedHelpers } from "vuex";
import ViewSpinner from "../../core/components/view-spinner/view-spinner";

const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  name: "EditUser",
  components: { ViewSpinner, InputWidget },
  data() {
    return {
      model: new UserModel(),
    };
  },
  computed: {
    ...mapState(["editUser", "editPageLoading"]),
  },
  watch: {
    editUser() {
      if (this.editUser) {
        this.model = new UserModel(this.editUser);
      }
    },
  },
  methods: {
    ...mapActions(["getDataByUser", "updateUser"]),
    async onSubmit() {
      const { success } = await this.updateUser(this.model.toJSON());
      if (success) {
        this.$toast("User updated successfully");
        await this.$router.push({ name: "users" });
      } else {
        this.$toast("Unable to update user", "danger");
      }
    },
  },
  mounted() {
    this.getDataByUser(this.$route.params.userId);
  },
};
</script>
<style lang="scss" scoped>
.edit-card {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
