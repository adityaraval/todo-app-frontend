import React from 'react';
import moment from 'moment';

import {
  Button, Badge,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const renderBadge = (completed) => {
  if (completed) {
    return (<Badge variant="success">COMPLETED</Badge>);
  }
  return <Badge variant="warning">PENDING</Badge>;
};

const formatDate = (date) => moment(date).format('DD/MM/YYYY');

const TodoList = ({
  items, deleteTodo, completeTodo, isLoading,
}) => {
  if (items.length) {
    return (
      <ul className="list-group">
        {
          items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex flex-row justify-content-between"
            >
              <div className="w-50">{item.title}</div>
              {
                item.completed ? null : (
                  <>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteTodo(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Button variant="outline-success">
                      <FontAwesomeIcon
                        icon={faCheck}
                        onClick={() => completeTodo(item.id)}
                      />
                    </Button>
                  </>
                )
              }
              <div>
                {
                  item.completed ? null : formatDate(item.date)
                }
              </div>
              <div>{renderBadge(item.completed)}</div>
            </li>
          ))
        }
      </ul>
    );
  } if (isLoading && items.length === 0) {
    return <span>Todo list is loading!</span>;
  }
  return <span>No items, please use above form to add items</span>;
};

export default TodoList;
