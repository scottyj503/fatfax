export const userIsAuthenticated = store => (store.user.isAuthenticated);
export const userIsAuthenticating = store => (store.user.isAuthenticating);
export const userAuthenticationError = store => (store.user.error);
