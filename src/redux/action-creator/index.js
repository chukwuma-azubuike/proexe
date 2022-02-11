import { data } from "../../data";
import * as actionTypes from "../actions/actionTypes";

export const getAllUsers = () => async (dispatch) => {
  dispatch({ type: actionTypes.GET_USERS_LOADING });
  try {
    dispatch({ type: actionTypes.GET_USERS_SUCCESS, payload: data });
  }
  catch (err) { dispatch({ type: actionTypes.GET_USERS_ERROR }) }
};

// Reloading the success task created
export const createNewUser = (data) => {
  return {
    type: actionTypes.CREATE_USER_SUCCESS,
    payload: data,
  };
};

export const updatTask = (Id, Name, Username, City, Email) => {
  return {
    type: actionTypes.UPDATE_USER_SUCCESS,
    payload: {
      userProfile: {
        Id: Id,
        Name: Name,
        Username: Username,
        City: City,
        Email: Email,
      },
    },
  };
};

//   Delete Task from the data.json
export const taskDeleted = (data) => {
  return {
    type: actionTypes.DELETE_USER_SUCCESS,
    payload: data,
    // isDeleted: true
  };
};
