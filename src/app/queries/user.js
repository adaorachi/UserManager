import * as i from './lib';

const userEndpoint =
  'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data';
const placeHolder = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = (dispatch, params) => {
  const { setIsLoading } = params;

  setIsLoading(true);
  i.axios
    .get(userEndpoint)
    .then((res) => {
      const getUsers = res.data.map((d) => ({
        id: d.id,
        name: d.name,
        email: d.email,
        username: d.username,
        city: d.address.city,
      }));
      dispatch({
        type: i.constants.GET_USERS,
        payload: getUsers,
      });
      setIsLoading(false);
    })
    .catch(() => {
      setIsLoading(false);
      i.notification('error', 'An error occured!');
    });
};

export const addUser = ({ dispatch, getState }, params) => {
  const { userValues, setIsSubmitting, setIsSubmitted } = params;

  setIsSubmitting(true);
  const { getUsers } = getState()?.user;
  const addedUser = { ...userValues, id: getUsers.length + 1 };

  i.axios
    .post(`${placeHolder}`, addedUser, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      const getStateCopy = [...getUsers];
      getStateCopy.unshift(addedUser);

      dispatch({ type: i.constants.UPDATE_USER, payload: getStateCopy });
      setIsSubmitting(false);
      setIsSubmitted(true);
      i.notification('success', 'User successfully added!');
    })
    .catch(() => {
      setIsSubmitting(false);
      i.notification('error', 'An error occured!');
    });
};

export const updateUser = ({ dispatch, getState }, params) => {
  const { userValues, userId, setIsSubmitting, setIsSubmitted } = params;

  setIsSubmitting(true);

  i.axios
    .patch(`${placeHolder}/${userId}`, userValues, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then(() => {
      const { getUsers } = getState()?.user;
      const getStateCopy = [...getUsers];

      const targetIndex = getStateCopy.findIndex((f) => f.id === userId);

      getStateCopy[targetIndex] = {
        ...getStateCopy[targetIndex],
        ...userValues,
      };

      dispatch({ type: i.constants.UPDATE_USER, payload: getStateCopy });
      setIsSubmitting(false);
      setIsSubmitted(true);
      i.notification('success', 'User successfully updated!');
    })
    .catch(() => {
      setIsSubmitting(false);
      i.notification('error', 'An error occured!');
    });
};

export const deleteUser = ({ dispatch, getState }, params) => {
  const { id, setIsDeleting, setIsDeleted } = params;

  setIsDeleting(true);
  i.axios
    .delete(`${placeHolder}/${id}`)
    .then(() => {
      const { getUsers } = getState()?.user;
      const updatedUsers = getUsers?.filter((u) => u.id !== id);

      dispatch({ type: i.constants.DELETE_USER, payload: updatedUsers });
      setIsDeleting(false);
      setIsDeleted(true);
      i.notification('success', 'User successfully deleted!');
    })
    .catch(() => {
      setIsDeleting(false);
      i.notification('error', 'An error occured!');
    });
};

export const sortUser = ({ dispatch, getState }, params) => {
  const { sortBy } = params;

  const { getUsers } = getState()?.user;

  const getStateCopy = [...getUsers];
  getStateCopy.sort((a, b) => {
    if (sortBy === 'desc') {
      return b.username.localeCompare(a.username);
    }

    return a.username.localeCompare(b.username);
  });
  dispatch({ type: i.constants.SORT_USER, payload: getStateCopy });
};
