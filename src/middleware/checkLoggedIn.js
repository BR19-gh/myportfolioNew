// eslint-disable-next-line no-unused-vars
const checkLoggedIn = (store) => (next) => (action) => {
  if (
    store.getState().authedUser === "" &&
    window.location.pathname !== "/login" &&
    window.location.pathname !== "/signIn"
  ) {
    if (localStorage.getItem("prevPath") === null) {
      localStorage.setItem("prevPath", window.location.pathname);
      window.location.replace("/login");
      return false;
    }
    return false;
  }

  let result = next(action);
  return result;
};

export default checkLoggedIn;
