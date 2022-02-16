import {
  HIDE_USER_MODAL,
  SHOW_USER_MODAL,
  CHANGE_PER_PAGE,
} from "./mutation-types";

export function showUserModal({ commit }) {
  commit(SHOW_USER_MODAL);
}

export function hideUserModal({ commit }) {
  commit(HIDE_USER_MODAL);
}

export function getDataByUser({ commit }, userUuid) {
  // commit(SET_EDIT_USER_DATA, payload);
}

export function changePerPage({ commit }, payload) {
  commit(CHANGE_PER_PAGE, payload);
}
