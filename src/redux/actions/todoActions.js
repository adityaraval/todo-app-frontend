import axios from '../../utils/httpClient';

import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  GET_ALL_TODO,
  COMPLETE_TODO,
} from './apiConstants';

import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  COMPLETE_TODO_REQUEST,
  COMPLETE_TODO_SUCCESS,
  COMPLETE_TODO_FAILURE,
  GET_ALL_TODO_REQUEST,
  GET_ALL_TODO_SUCCESS,
  GET_ALL_TODO_FAILURE,

} from '../actionTypes/todoActionTypes';

export const addTodo = (todoObject) => async (dispatch) => {
  dispatch({
    type: ADD_TODO_REQUEST,
  });
  try {
    const response = await axios.post(`${ADD_TODO}`, todoObject);
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: ADD_TODO_FAILURE,
      error,
    });
  }
};
export const updateTodo = (id, todoObject) => async (dispatch) => {
  dispatch({
    type: UPDATE_TODO_REQUEST,
  });
  try {
    await axios.put(`${UPDATE_TODO}/${id}`, todoObject);
    dispatch({
      type: UPDATE_TODO_SUCCESS,
      payload: {
        ...todoObject, id,
      },
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TODO_FAILURE,
      error,
    });
  }
};

export const getAllTodos = () => async (dispatch) => {
  dispatch({
    type: GET_ALL_TODO_REQUEST,
  });
  try {
    const response = await axios.get(`${GET_ALL_TODO}`);
    dispatch({
      type: GET_ALL_TODO_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_TODO_FAILURE,
      error,
    });
  }
};

export const completeTodo = (id) => async (dispatch) => {
  dispatch({
    type: COMPLETE_TODO_REQUEST,
  });
  try {
    await axios.put(`${COMPLETE_TODO}/completed/${id}`);
    dispatch({
      type: COMPLETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: COMPLETE_TODO_FAILURE,
      error,
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  dispatch({
    type: DELETE_TODO_REQUEST,
  });
  try {
    await axios.delete(`${DELETE_TODO}/${id}`);
    dispatch({
      type: DELETE_TODO_SUCCESS,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TODO_FAILURE,
      error,
    });
  }
};


export const changeFilter = (filter) => (dispatch) => {
  dispatch({
    type: filter,
  });
};
