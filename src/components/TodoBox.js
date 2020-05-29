import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { defaultSchema, validationSchema } from '../utils/validationSchema';

import Loader from './Loader';

import { SubmitButton } from '../styles/commonStyles';


const TodoForm = ({ addTodo, isLoading }) => (
  <>
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h1>Todo Box</h1>
      <Loader isLoading={isLoading} />
    </div>
    <Formik
      initialValues={defaultSchema.todo}
      enableReinitialize
      validationSchema={validationSchema.addTodoValidationSchema}
      onSubmit={(values, { resetForm }) => {
        addTodo({
          title: values.title,
          date: values.date,
        });
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form onSubmit={handleSubmit} className="mx-auto">
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>
                  Title :
                </Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  className={touched.title && errors.title ? 'error' : null}
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="error-message"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="date">
                <Form.Label>
                  Date :
                </Form.Label>
                <DatePicker
                  selected={values.date}
                  onChange={(date) => setFieldValue('date', date)}
                  minDate={new Date()}
                  dateFormat="MMMM d, yyyy"
                  className={touched.date && errors.date ? 'error form-control' : 'form-control'}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className="error-message"
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="d-flex justify-content-between">
            <SubmitButton
              type="submit"
              disabled={isLoading}
            >
              ADD TODO
            </SubmitButton>
          </Form.Group>
        </Form>
      )}
    </Formik>
  </>
);


export default TodoForm;
