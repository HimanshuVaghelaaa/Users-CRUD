import { HIDE_USER_MODAL, SHOW_USER_MODAL } from "./mutation-types";

export default {
  [SHOW_USER_MODAL](state) {
    state.modal.show = true;
  },
  [HIDE_USER_MODAL](state) {
    state.modal.show = false;
  },
};
