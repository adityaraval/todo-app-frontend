import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
} from 'react-bootstrap';

import { validationSchema } from '../utils/validationSchema';


import { SubmitButton, FormContainer } from '../styles/commonStyles';

const UpdateProfile = ({ changePassword, currentUser }) => (
  <FormContainer className="justify-content-md-center mt-5">
    <h1>Change Password</h1>
    <Formik
      initialValues={currentUser}
      enableReinitialize
      validationSchema={validationSchema.updateProfileValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          changePassword({
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
              className={touched.password && errors.password ? 'error' : null}
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
              CHANGE PASSWORD
            </SubmitButton>
          </Form.Group>
        </Form>
      )}
    </Formik>
  </FormContainer>
);


export default UpdateProfile;
