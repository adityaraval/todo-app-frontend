import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TodoPage from '../pages/TodoPage';

import {
  addTodo,
  updateTodo,
  getAllTodos,
  completeTodo,
  deleteTodo,
  changeFilter,
} from '../redux/actions/todoActions';

import {
  selectTodos,
  selectLoader,
} from '../redux/selectors/todoSelectors';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todoObj) => dispatch(addTodo(todoObj)),
    updateTodo: (id, todoObj) => dispatch(updateTodo(id, todoObj)),
    getAllTodos: () => dispatch(getAllTodos()),
    completeTodo: (id) => dispatch(completeTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    changeFilter: (filter) => dispatch(changeFilter(filter)),
  };
}

const mapStateToProps = createStructuredSelector({
  items: selectTodos,
  isLoading: selectLoader,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
