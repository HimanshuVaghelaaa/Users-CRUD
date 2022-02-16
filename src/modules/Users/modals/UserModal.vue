<template>
  <ValidationObserver ref="user-modal" v-slot="{ handleSubmit }">
    <b-modal
      v-model="modal.show"
      title="Create User"
      size="lg"
      @hide="onHideModal"
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
    ...mapActions(["hideUserModal"]),
    onSubmit() {},
    onHideModal() {
      this.hideUserModal();
      this.model = new UserModel();
    },
  },
};
</script>

<style scoped></style>
