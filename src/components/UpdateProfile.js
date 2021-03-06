import React from 'react';
import {
  Formik,
  ErrorMessage,
} from 'formik';
import {
  Form,
} from 'react-bootstrap';

import {
  validationSchema,
} from '../utils/validationSchema';
import { SubmitButton, FormContainer } from '../styles/commonStyles';

const UpdateProfile = ({ updateProfile, currentUser }) => (
  <FormContainer className="justify-content-md-center mt-5">
    <h1>Update Profile</h1>
    <Formik
      initialValues={currentUser}
      enableReinitialize
      validationSchema={validationSchema.updateProfileValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          updateProfile({
            name: values.name,
            email: values.email,
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
          <Form.Group className="d-flex justify-content-between">
            <SubmitButton
              type="submit"
              disabled={isSubmitting}
            >
              UPDATE PROFILE
            </SubmitButton>
          </Form.Group>
        </Form>
      )}
    </Formik>
  </FormContainer>
);


export default UpdateProfile;
