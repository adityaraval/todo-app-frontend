import { createSelector } from 'reselect';

const selectUser = (state) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser,
);

export const selectLoginLoader = createSelector(
  [selectUser],
  (user) => user.isLoggingIn,
);

export const selectSignupLoader = createSelector(
  [selectUser],
  (user) => user.isSigningUp,
);
