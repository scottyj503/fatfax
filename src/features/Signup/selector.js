export const isSignupInProgress = store => (store.userSignup.isSignupInProgress);
export const isSignupComplete = store => (store.userSignup.isSignupComplete);
export const isConfirmationInProgress = store => (store.userSignup.isConfirmationInProgress);
export const isConfirmationComplete = store => (store.userSignup.isConfirmationComplete);
export const newUser = store => (store.userSignup.newUser);
export const error = store => (store.userSignup.error);
