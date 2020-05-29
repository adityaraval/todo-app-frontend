import _ from 'lodash';
import * as types from '../actionTypes/todoActionTypes';

const initialState = {
  items: [],
  filter: 'SHOW_ALL',
  isLoading: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.ADD_TODO_SUCCESS: {
      return {
        ...state,
        items: [...state.items, {
          ...payload.todo,
        }],
        isLoading: false,
      };
    }
    case types.ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.GET_ALL_TODO_REQUEST: {
      return {
        ...state,
        items: [],
        isLoading: true,
      };
    }
    case types.GET_ALL_TODO_SUCCESS: {
      return {
        ...state,
        items: payload.todos,
        isLoading: false,
      };
    }
    case types.GET_ALL_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.DELETE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.DELETE_TODO_SUCCESS: {
      return {
        ...state,
        items: _.filter(state.items, (item) => item.id !== payload),
        isLoading: false,
      };
    }
    case types.DELETE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case types.COMPLETE_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case types.COMPLETE_TODO_SUCCESS: {
      return {
        ...state,
        items: _.map(state.items, (item) => (item.id === payload ? { ...item, completed: 1 } : item)),
        isLoading: false,
      };
    }
    case types.COMPLETE_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case types.SHOW_ALL: {
      return {
        ...state,
        filter: types.SHOW_ALL,
      };
    }
    case types.ONLY_PENDING: {
      return {
        ...state,
        filter: types.ONLY_PENDING,
      };
    }
    case types.ONLY_COMPLETED: {
      return {
        ...state,
        filter: types.ONLY_COMPLETED,
      };
    }
    default:
      return state;
  }
}
