import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
  Button,
} from 'react-bootstrap';

import styled from 'styled-components';
import { defaultSchema, validationSchema } from '../utils/validationSchema';

import colors from '../utils/theme';

const SubmitButton = styled(Button)`
    background-color:${colors.BrandBlue};
    color:${colors.BrandWhite}
    border:0;
`;

const FormContainer = styled.div`
    background-color: ${colors.BrandBackground};
    padding: 32px;
    border-radius:5px;
`;

const SignupForm = ({ signup }) => (
  <FormContainer className="justify-content-md-center mt-5">
    <h1>Signup</h1>
    <Formik
      initialValues={defaultSchema.user}
      enableReinitialize
      validationSchema={validationSchema.signUpValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          signup({
            name: values.name,
            email: values.email,
            password: values.password,
          });
          setSubmitting(false);
          resetForm();
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
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
              type="text"
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
              disabled={isSubmitting}
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
