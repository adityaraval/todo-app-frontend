import * as Yup from 'yup';

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must have at least 2 characters')
    .max(30, 'Name can not have more than 30 characters')
    .required('*Name is required'),
  email: Yup.string().email().required('*Email is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .max(30, 'Password can not have more than 30 characters')
    .required('*Password is required'),
});

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('*Email is required'),
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .max(30, 'Password can not have more than 30 characters')
    .required('*Password is required'),
});

export const updateProfileValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must have at least 2 characters')
    .max(30, 'Name can not have more than 30 characters')
    .required('*Name is required'),
  email: Yup.string().email().required('*Email is required'),
});

export const changePasswordValidationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must have at least 6 characters')
    .max(30, 'Password can not have more than 30 characters')
    .required('*Password is required'),
});

export const addTodoValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title must have at least 2 characters')
    .max(30, 'Title can not have more than 30 characters')
    .required('*Title is required'),
  date: Yup.date().required(),
});

export const editTodoValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Title must have at least 2 characters')
    .max(30, 'Title can not have more than 30 characters')
    .required('*Title is required'),
  date: Yup.date().required(),
});


export const defaultSchema = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  todo: {
    title: '',
    date: '',
  },
};

export const validationSchema = {
  signUpValidationSchema,
  loginValidationSchema,
  updateProfileValidationSchema,
  changePasswordValidationSchema,
  addTodoValidationSchema,
  editTodoValidationSchema,
};
