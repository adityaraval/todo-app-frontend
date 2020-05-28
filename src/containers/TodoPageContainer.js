import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import TodoPage from '../pages/TodoPage';

import {
  addTodo,
  getAllTodos,
  completeTodo,
  deleteTodo,
} from '../redux/actions/todoActions';

import {
  selectTodos,
} from '../redux/selectors/todoSelectors';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todoObj) => dispatch(addTodo(todoObj)),
    getAllTodos: () => dispatch(getAllTodos()),
    completeTodo: (id) => dispatch(completeTodo(id)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
  };
}

const mapStateToProps = createStructuredSelector({
  items: selectTodos,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
