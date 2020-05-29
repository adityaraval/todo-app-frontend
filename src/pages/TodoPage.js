import React, { useEffect } from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import styled from 'styled-components';

import TodoBox from '../components/TodoBox';
import TodoList from '../components/TodoList';

import colors from '../utils/theme';

import FilterTodos from '../components/FilterTodos';


const FormContainer = styled(Container)`
    background-color: ${colors.BrandBackground};
    padding: 32px;
    border-radius:5px;
`;

const TodoPage = ({
  items,
  isLoading,
  changeFilter,
  addTodo,
  getAllTodos,
  completeTodo,
  deleteTodo,
}) => {
  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <FormContainer className="justify-content-md-center mt-5">
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
          />
        </Col>
      </Row>
    </FormContainer>
  );
};


export default TodoPage;
