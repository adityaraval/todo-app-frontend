import axios, {
  deleteAccessTokenHeader,
  setAccessTokenHeader,
} from '../../utils/httpClient';

import {
  SIGNUP,
  LOGIN,
  FETCH_CURRENT_USER,
  UPDATE_PROFILE,
  CHANGE_PASSWORD,
} from './apiConstants';

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAILURE,
} from '../actionTypes/userActionTypes';

import history from '../../utils/history';
import storage from '../../utils/storage';

export const signup = (userObject) => async (dispatch) => {
  dispatch({
    type: SIGNUP_REQUEST,
  });
  try {
    const response = await axios.post(`${SIGNUP}`, userObject);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      error,
    });
  }
};

export const login = (userObject) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    const response = await axios.post(`${LOGIN}`, userObject);
    await storage.setItem('token', response.token);
    await storage.setItem('user', JSON.stringify(response.user));
    setAccessTokenHeader(response.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response,
    });
    history.push('/todo');
  } catch (error) {
    dispatch({
      type: LOGIN_FAILURE,
      error,
    });
  }
};

export const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: FETCH_CURRENT_USER_REQUEST });
  try {
    const response = await axios.get(FETCH_CURRENT_USER);
    dispatch({
      type: FETCH_CURRENT_USER_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: FETCH_CURRENT_USER_FAILURE,
      payload: error,
    });
  }
};

export const updateProfile = (userObject) => async (dispatch) => {
  dispatch({
    type: UPDATE_PROFILE_REQUEST,
  });
  try {
    await axios.put(`${UPDATE_PROFILE}`, userObject);
    // update local storage
    const user = await storage.getItem('user');
    const parsedUser = JSON.parse(user);
    parsedUser.name = userObject.name;
    parsedUser.email = userObject.email;
    await storage.setItem('user', parsedUser);

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: userObject,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      error,
    });
  }
};

export const changePassword = (userObject) => async (dispatch) => {
  dispatch({
    type: CHANGE_PASSWORD_REQUEST,
  });
  try {
    const response = await axios.post(`${CHANGE_PASSWORD}`, userObject);
    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAILURE,
      error,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await storage.removeItem('token');
    await storage.removeItem('user');
    deleteAccessTokenHeader();
    dispatch({ type: LOGOUT_SUCCESS });
    history.push('/');
  } catch (error) {
    // logout error
  }
};
