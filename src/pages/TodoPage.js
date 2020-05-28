import React, { useEffect } from 'react';

import {
  Container, Row, Col,
} from 'react-bootstrap';

import styled from 'styled-components';

import TodoBox from '../components/TodoBox';
import TodoList from '../components/TodoList';

import colors from '../utils/theme';


const FormContainer = styled(Container)`
    background-color: ${colors.BrandBackground};
    padding: 32px;
    border-radius:5px;
`;

const TodoPage = ({
  items,
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
          />
        </Col>
      </Row>
      <TodoList
        items={items}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </FormContainer>
  );
};


export default TodoPage;
