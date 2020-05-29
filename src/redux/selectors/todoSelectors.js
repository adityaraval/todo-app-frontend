import { createSelector } from 'reselect';

import {
  SHOW_ALL,
  ONLY_PENDING,
  ONLY_COMPLETED,
} from '../actionTypes/todoActionTypes';

const selectTodo = (state) => state.todo;

export const selectTodos = createSelector(
  [selectTodo],
  (todo) => {
    switch (todo.filter) {
      case SHOW_ALL:
        return todo.items;
      case ONLY_COMPLETED:
        return todo.items.filter((t) => t.completed);
      case ONLY_PENDING:
        return todo.items.filter((t) => !t.completed);
      default:
        return todo.items;
    }
  },
);

export const selectLoader = createSelector(
  [selectTodo],
  (todo) => todo.isLoading,
);
