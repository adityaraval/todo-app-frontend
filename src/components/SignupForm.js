import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
} from 'react-bootstrap';

import { defaultSchema, validationSchema } from '../utils/validationSchema';

import { SubmitButton, FormContainer } from '../styles/commonStyles';
import Loader from './Loader';

const SignupForm = ({ signup, isSigningUp }) => (
  <FormContainer className="justify-content-md-center mt-5">
    <div className="d-flex flex-row align-items-center justify-content-between">
      <h1>Signup</h1>
      <Loader isLoading={isSigningUp} loadingText="Signing Up....." />
    </div>
    <Formik
      initialValues={defaultSchema.user}
      enableReinitialize
      validationSchema={validationSchema.signUpValidationSchema}
      onSubmit={(values, { resetForm }) => {
        signup({
          name: values.name,
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
          <Form.Group controlId="name">
            <Form.Label>
              Name :
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? 'error' : null}
            />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />

          </Form.Group>
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
              disabled={isSigningUp}
            >
              SIGNUP
            </SubmitButton>
          </Form.Group>
        </Form>
      )}
    </Formik>
  </FormContainer>
);


export default SignupForm;
