import axios from 'axios';
import get from 'lodash/get';
import { toast } from 'react-toastify';
import CustomError from './customError';
import history from './history';
import storage from './storage';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

export const toastError = (errorToShow) => {
  toast.error(errorToShow.message, {
    position: toast.POSITION.BOTTOM_LEFT,
  });
};

export const toastSuccess = (messageToShow) => {
  toast.success(messageToShow);
};

export const toastWarning = (messageToShow) => {
  toast.warn(messageToShow);
};

export const setAccessTokenHeader = (accessToken) => {
  instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const deleteAccessTokenHeader = () => {
  instance.defaults.headers.common.Authorization = null;
};

export const getAccessTokenFromHeader = () => instance.defaults.headers.common.Authorization;

instance.interceptors.request.use(async (request) => {
  const token = await storage.getItem('token');
  if (token) {
    request.headers.common.Authorization = `Bearer ${token}`;
  }
  return request;
});

instance.interceptors.response.use(
  (response) => {
    const message = get(response, 'data.message');
    if (message) toastSuccess(message);
    return response.data;
  },
  async (error) => {
    const status = get(error, 'response.status');
    const errorKey = get(error, 'response.data.errorKey');
    const message = get(error, 'response.data.message');
    const payload = get(error, 'response.data.payload');

    // general error message
    let errorToShow = new CustomError(
      'Oops! Something went wrong. Please contact customer support for further assistance.',
      errorKey,
      payload,
    );

    if (status === 401) {
      history.push('/');
      // window.location.reload();
      errorToShow = new CustomError(message, errorKey, payload);
      // toastError(errorToShow);
    } if (status === 403) {
      history.push('/');
      // window.location.reload();
      errorToShow = new CustomError(message, errorKey, payload);
      toastError(errorToShow);
    } else if (status === 422) {
      // errors to show on UI
      errorToShow = new CustomError(message, errorKey, payload);
      toastError(errorToShow);
    } else if (status === 404) {
      // errorToShow = new CustomError(message, errorKey, payload);
      // toastError(errorToShow);
    } else if (status === 400) {
      errorToShow = new CustomError(message, errorKey, payload);
      toastError(errorToShow);
    }

    return Promise.reject(errorToShow);
  },
);


export default instance;
