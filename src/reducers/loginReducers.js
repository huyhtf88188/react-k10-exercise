import { GET_LOGIN } from "../action/loginAction";

export const loginReducer = (state = { login: [] }, action) => {
  switch (action.type) {
    case GET_LOGIN: {
      return {
        ...state,
        login: [...state.login, action.payload],
      };
    }

    default:
      return state;
  }
};
