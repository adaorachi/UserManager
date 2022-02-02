import { getUsers, addUser, updateUser, deleteUser, sortUser } from '../../api';

export const fetchUsers = (params) => {
  return (dispatch) => {
    getUsers(dispatch, params);
  };
};

export const fetchAddedUser = (params) => {
  return (dispatch, getState) => {
    addUser({ dispatch, getState }, params);
  };
};

export const fetchUpdatedUser = (params) => {
  return (dispatch, getState) => {
    updateUser({ dispatch, getState }, params);
  };
};

export const deleteAUser = (params) => {
  return (dispatch, getState) => {
    deleteUser({ dispatch, getState }, params);
  };
};

export const fetchSortedUser = (params) => {
  return (dispatch, getState) => {
    sortUser({ dispatch, getState }, params);
  };
};
