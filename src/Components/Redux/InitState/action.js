import { SET_PAGE } from "./actionType";
import { GET_DATA } from "./actionType";

export const set_page = (payload) => ({
  type: SET_PAGE,
  payload,
});

export const get_data = (payload) => ({
  type: GET_DATA,
  payload,
});
