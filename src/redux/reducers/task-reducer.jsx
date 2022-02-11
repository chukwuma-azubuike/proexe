import { data } from '../../data';
import * as actionTypes from '../actions/actionTypes'

export let state = { users: data }

const reducer = (
  store = { users: data },
  action
) => {

  // Create Single User
  if (action.type === actionTypes.CREATE_USER_SUCCESS) {
    return {
      ...store,
      users: [...store.users, action.payload]
    };
  }
  //   Delete Single User
  if (action.type === actionTypes.DELETE_USER_SUCCESS) {
    return {
      ...store,
      users: store.users.filter((usersArray, index) => usersArray != action.payload.id)
    };
  }

  //Update Single User
  if (action.type === actionTypes.UPDATE_USER_SUCCESS) {
    store.users[action.payload.id] = action.payload
    return { ...store, ...store.users }
  }
};

export default reducer;