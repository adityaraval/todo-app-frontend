import React from 'react';
import { Form } from 'react-bootstrap';

const FilterTodos = ({ changeFilter }) => (
  <Form.Group controlId="filterTodos">
    <Form.Label>State</Form.Label>
    <Form.Control as="select" onChange={(val) => changeFilter(val.target.value)}>
      <option value="SHOW_ALL">SHOW_ALL</option>
      <option value="ONLY_PENDING">ONLY_PENDING</option>
      <option value="ONLY_COMPLETED">ONLY_COMPLETED</option>
    </Form.Control>
  </Form.Group>
);

export default FilterTodos;
