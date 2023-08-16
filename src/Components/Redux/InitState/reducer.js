import { get_data, set_page } from "./action";
import { GET_DATA, SET_PAGE } from "./actionType";
import { initStates } from "./constant";

export const reducer = (state = initStates, { type, payload }) => {
  switch (type) {
    case SET_PAGE: {
      set_page("setpage", payload);
      return {
        ...state,
        page: payload,
      };
    }
    case GET_DATA:{
      get_data ("getdata",payload);
      return{
        ...state,
        data:payload,
      };
    }

    default: {
      return state;
    }
  }
};
