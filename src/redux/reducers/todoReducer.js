import _ from 'lodash';
import * as types from '../actionTypes/todoActionTypes';

const initialState = {
  items: [],
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TODO_REQUEST: {
      return {
        ...state,
      };
    }
    case types.ADD_TODO_SUCCESS: {
      return {
        ...state,
        items: [...state.items, {
          ...payload, id: Math.random(),
        }],
      };
    }
    case types.ADD_TODO_FAILURE: {
      return {
        ...state,
      };
    }
    case types.GET_ALL_TODO_REQUEST: {
      return {
        ...state,
      };
    }
    case types.GET_ALL_TODO_SUCCESS: {
      return {
        ...state,
        items: payload.todos,
      };
    }
    case types.GET_ALL_TODO_FAILURE: {
      return {
        ...state,
      };
    }
    case types.DELETE_TODO_REQUEST: {
      return {
        ...state,
      };
    }
    case types.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        items: _.filter(state.items, (item) => item.id !== payload),
      };
    }
    case types.DELETE_TODO_FAILURE: {
      return {
        ...state,
      };
    }

    case types.COMPLETE_TODO_REQUEST: {
      return {
        ...state,
      };
    }
    case types.COMPLETE_TODO_SUCCESS: {
      return {
        ...state,
        items: _.map(state.items, (item) => (item.id === payload ? { ...item, completed: 1 } : item)),
      };
    }
    case types.COMPLETE_TODO_FAILURE: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
