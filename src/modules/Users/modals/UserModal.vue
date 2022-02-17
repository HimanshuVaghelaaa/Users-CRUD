<template>
  <ValidationObserver ref="user-modal" v-slot="{ handleSubmit }">
    <b-modal
      v-model="modal.show"
      title="Create User"
      size="lg"
      @hidden="onHideModal"
      @ok.prevent="handleSubmit(onSubmit)"
    >
      <b-form @keydown.enter.prevent="handleSubmit(onSubmit)">
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div class="col-md-6">
                <input-widget
                  :model="model"
                  attribute="name"
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
    </b-modal>
  </ValidationObserver>
</template>

<script>
import InputWidget from "../../../core/components/input-widget/InputWidget";
import UserModel from "../models/UserModel";
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  name: "UserModal",
  components: { InputWidget },
  data() {
    return {
      model: new UserModel(),
    };
  },
  computed: {
    ...mapState(["modal"]),
  },
  methods: {
    ...mapActions(["hideUserModal", "createNewUser"]),
    async onSubmit() {
      const { success } = await this.createNewUser(this.model.toJSON());
      if (success) {
        this.$toast("User created successfully");
        this.onHideModal();
      } else {
        this.$toast("Unable to create user", "danger");
      }
    },
    onHideModal() {
      this.hideUserModal();
      setTimeout(() => {
        this.model = new UserModel();
      }, 500);
    },
  },
};
</script>

<style scoped></style>
