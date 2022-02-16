import { HIDE_USER_MODAL, SHOW_USER_MODAL } from "./mutation-types";

export function showUserModal({ commit }) {
  commit(SHOW_USER_MODAL);
}

export function hideUserModal({ commit }) {
  commit(HIDE_USER_MODAL);
}
