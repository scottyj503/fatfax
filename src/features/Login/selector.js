const userIsAuthenticated = store => (store.user.isAuthenticated);
const userIsAuthenticating = store => (store.user.isAuthenticating);
const userAuthenticationError = store => (store.user.error);
