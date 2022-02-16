<template>
  <ValidationObserver ref="user-modal" v-slot="{ handleSubmit }">
    <b-card no-body style="width: 100%; height: 100%">
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
          User ID: {{ model.uuid }}
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
            </div>
          </div>
        </b-form>
      </b-card-body>
    </b-card>
  </ValidationObserver>
</template>

<script>
import UserModel from "./models/UserModel";
import InputWidget from "../../core/components/input-widget/InputWidget";
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("users");
export default {
  name: "EditUser",
  components: { InputWidget },
  data() {
    return {
      model: new UserModel(),
    };
  },
  computed: {
    ...mapState(["editUser"]),
  },
  methods: {
    ...mapActions(["getDataByUser"]),
    onSubmit() {},
  },
  async mounted() {
    await this.getDataByUser(this.$route.params.userUuid);
    this.model = new UserModel(this.editUser);
  },
};
</script>
<style scoped>
.edit-card {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
