import * as types from '../actionTypes/userActionTypes';
import { defaultSchema } from '../../utils/validationSchema';

const initialState = {
  currentUser: defaultSchema.user,
  isLoggingIn: false,
  isSigningUp: false,
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case types.SIGNUP_REQUEST: {
      return {
        ...state,
        isSigningUp: true,
      };
    }
    case types.SIGNUP_SUCCESS: {
      return {
        ...state,
        isSigningUp: false,
      };
    }
    case types.SIGNUP_FAILURE: {
      return {
        ...state,
        isSigningUp: false,
      };
    }
    case types.LOGIN_REQUEST: {
      return {
        ...state,
        isLoggingIn: true,
      };
    }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        currentUser: payload.user,
        isLoggingIn: false,
      };
    }
    case types.LOGIN_FAILURE: {
      return {
        ...state,
        isLoggingIn: false,
      };
    }
    case types.FETCH_CURRENT_USER_REQUEST: {
      return {
        ...state,
      };
    }
    case types.FETCH_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        currentUser: payload,
      };
    }
    case types.FETCH_CURRENT_USER_FAILURE: {
      return {
        ...state,
      };
    }
    case types.UPDATE_PROFILE_REQUEST: {
      return {
        ...state,
      };
    }
    case types.UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          name: payload.name,
          email: payload.email,
        },
      };
    }
    case types.UPDATE_PROFILE_FAILURE: {
      return {
        ...state,
      };
    }
    case types.CHANGE_PASSWORD_REQUEST: {
      return {
        ...state,
      };
    }
    case types.CHANGE_PASSWORD_SUCCESS: {
      return {
        ...state,
      };
    }
    case types.CHANGE_PASSWORD_FAILURE: {
      return {
        ...state,
      };
    }
    case types.LOGOUT_SUCCESS: {
      return {
        ...state,
        currentUser: {},
      };
    }
    default:
      return state;
  }
}
