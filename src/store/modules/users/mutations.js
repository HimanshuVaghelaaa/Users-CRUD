import {
  ADD_NEW_USER,
  CHANGE_PER_PAGE,
  DELETE_USER,
  HIDE_USER_MODAL,
  SET_EDIT_USER_DATA,
  SET_USERS_DATA,
  SHOW_USER_MODAL,
  TOGGLE_EDIT_PAGE,
  TOGGLE_USERS_TABLE,
  UPDATE_USER,
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
  [ADD_NEW_USER](state, payload) {
    state.users.push(payload);

    state.users = [...state.users];
  },
  [UPDATE_USER](state, payload) {
    const index = state.users.findIndex((u) => u.id === payload.id);
    state.users[index] = { ...payload };

    state.users = [...state.users];
  },
  [DELETE_USER](state, userId) {
    state.users = state.users.filter((u) => u.id !== userId);

    state.users = [...state.users];
  },
  [SET_USERS_DATA](state, payload) {
    state.users = [...payload];
  },
  [TOGGLE_USERS_TABLE](state, payload) {
    state.tableLoading = payload;
  },
  [TOGGLE_EDIT_PAGE](state, payload) {
    state.editPageLoading = payload;
  },
  [CHANGE_PER_PAGE](state, payload) {
    state.perPage = payload;
  },
};
