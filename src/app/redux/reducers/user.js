import constants from '../constants';
const initialState = {
  getUsers: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case constants.GET_USERS:
      return {
        ...state,
        getUsers: payload,
      };
    case constants.ADD_USER:
      return {
        ...state,
        getUsers: payload,
      };
    case constants.UPDATE_USER:
      return {
        ...state,
        getUsers: payload,
      };
    case constants.DELETE_USER:
      return {
        ...state,
        getUsers: payload,
      };
    case constants.SORT_USER:
      return {
        ...state,
        getUsers: payload,
      };

    default:
      return state;
  }
};
