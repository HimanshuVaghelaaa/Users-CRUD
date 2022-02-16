import {
  HIDE_USER_MODAL,
  SET_EDIT_USER_DATA,
  SHOW_USER_MODAL,
  CHANGE_PER_PAGE,
} from "./mutation-types";

export default {
  [SHOW_USER_MODAL](state) {
    state.modal.show = true;
  },
  [HIDE_USER_MODAL](state) {
    state.modal.show = false;
  },
  [SET_EDIT_USER_DATA](state, payload) {
    state.editUser = { ...payload };
  },
  [CHANGE_PER_PAGE](state, payload) {
    state.perPage = payload;
  },
};
