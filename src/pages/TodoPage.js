import React, { useEffect } from 'react';

import {
  Row, Col,
} from 'react-bootstrap';


import TodoBox from '../components/TodoBox';
import TodoList from '../components/TodoList';


import FilterTodos from '../components/FilterTodos';


import { TodoPageContainer } from '../styles/commonStyles';

const TodoPage = ({
  items,
  isLoading,
  changeFilter,
  addTodo,
  getAllTodos,
  completeTodo,
  updateTodo,
  deleteTodo,
}) => {
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <TodoPageContainer className="justify-content-md-center mt-5">
      <Row>
        <Col>
          <TodoBox
            addTodo={addTodo}
            isLoading={isLoading}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <FilterTodos changeFilter={changeFilter} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList
            items={items}
            isLoading={isLoading}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </Col>
      </Row>
    </TodoPageContainer>
  );
};


export default TodoPage;
