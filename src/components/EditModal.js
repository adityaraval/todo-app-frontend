import React from 'react';
import moment from 'moment';
import {
  Formik,
  ErrorMessage,
} from 'formik';

import {
  Modal,
  Form,
  Row,
  Col,
} from 'react-bootstrap';

import DatePicker from 'react-datepicker';

import { validationSchema } from '../utils/validationSchema';
import { SubmitButton } from '../styles/commonStyles';

const EditModal = ({
  show,
  handleClose,
  todo,
  updateTodo,
  isLoading,
}) => (
  <>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Formik
          initialValues={todo}
          enableReinitialize
          validationSchema={validationSchema.editTodoValidationSchema}
          onSubmit={(values, { resetForm }) => {
            updateTodo(values.id, {
              title: values.title,
              date: values.date,
            });
            handleClose(true);
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
                      selected={values.date ? moment(values.date).toDate() : moment().toDate()}
                      onChange={(date) => setFieldValue('date', date)}
                      minDate={new Date()}
                      dateFormat="MM-dd-yyyy"
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
              <Row>
                <Col>
                  <SubmitButton
                    type="submit"
                    disabled={isLoading}
                  >
                    UPDATE TODO
                  </SubmitButton>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Modal.Body>

    </Modal>

  </>
);

export default EditModal;
