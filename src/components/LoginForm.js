import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
} from 'react-bootstrap';

import { defaultSchema, validationSchema } from '../utils/validationSchema';
import Loader from './Loader';
import { SubmitButton, FormContainer } from '../styles/commonStyles';


const LoginForm = ({ login, isLoggingIn }) => (
  <FormContainer className="justify-content-md-center mt-5">
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h1>Login</h1>
      <Loader isLoading={isLoggingIn} loadingText="Logging In....." />
    </div>
    <Formik
      initialValues={defaultSchema.user}
      enableReinitialize
      validationSchema={validationSchema.loginValidationSchema}
      onSubmit={(values, { resetForm }) => {
        login({
          email: values.email,
          password: values.password,
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
      }) => (
        <Form onSubmit={handleSubmit} className="mx-auto">
          <Form.Group controlId="email">
            <Form.Label>
              Email :
            </Form.Label>
            <Form.Control
              type="text"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? 'error' : null}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-message"
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>
              Password :
            </Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className={touched.email && errors.email ? 'error' : null}
            />
            <ErrorMessage
              name="password"
              component="div"
              className="error-message"
            />
          </Form.Group>

          <Form.Group className="d-flex justify-content-between">
            <SubmitButton
              type="submit"
              disabled={isLoggingIn}
            >
              LOGIN
            </SubmitButton>
          </Form.Group>
        </Form>
      )}
    </Formik>
  </FormContainer>
);


export default LoginForm;
