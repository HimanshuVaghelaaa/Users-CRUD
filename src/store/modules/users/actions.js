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
import httpService from "../../../core/services/httpService";
import router from "../../../router/router";

export function showUserModal({ commit }) {
  commit(SHOW_USER_MODAL);
}

export function hideUserModal({ commit }) {
  commit(HIDE_USER_MODAL);
}

export async function createNewUser({ state, commit }, params) {
  commit(TOGGLE_USERS_TABLE, true);
  const image = params.image;
  if (image) {
    params.imageBase64 = await getBase64(image);
    params.image = null;
  }
  const response = await httpService.post("/users", params);
  commit(TOGGLE_USERS_TABLE, false);
  if (response.success) {
    commit(ADD_NEW_USER, response.body);
  }
  return response;
}

export async function updateUser({ state, commit }, params) {
  commit(TOGGLE_EDIT_PAGE, true);
  const image = params.image;
  if (image) {
    params.imageBase64 = await getBase64(image);
    params.image = null;
  }
  const response = await httpService.put(`/users/${params.id}`, params);
  commit(TOGGLE_EDIT_PAGE, false);
  if (response.success) {
    commit(UPDATE_USER, response.body);
  }
  return response;
}

export async function deleteUser({ state, commit }, userId) {
  commit(TOGGLE_USERS_TABLE, true);
  const response = await httpService.delete(`/users/${userId}`);
  commit(TOGGLE_USERS_TABLE, false);
  if (response.success) {
    commit(DELETE_USER, userId);
  }
  return response;
}

export async function getUsersData({ commit }) {
  commit(TOGGLE_USERS_TABLE, true);
  const { success, body } = await httpService.get(`/users`);
  commit(TOGGLE_USERS_TABLE, false);
  if (success) {
    commit(SET_USERS_DATA, body);
  }
}

export async function getDataByUser({ commit }, userId) {
  commit(TOGGLE_EDIT_PAGE, true);
  const { success, body } = await httpService.get(`/users/${userId}`);
  commit(TOGGLE_EDIT_PAGE, false);
  if (success) {
    commit(SET_EDIT_USER_DATA, body);
  } else {
    await router.push({ name: "users" });
  }
}

export function changePerPage({ commit }, payload) {
  commit(CHANGE_PER_PAGE, payload);
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
