// eslint-disable-next-line no-unused-vars
const checkLoggedIn = (store) => (next) => (action) => {
  if (localStorage.getItem("handleAnswer") === "true") {
    let result = next(action);
    return result;
  } else if (window.location.pathname !== "/login") {
    if (localStorage.getItem("prevPath") === null) {
      localStorage.setItem("prevPath", window.location.pathname);
      window.location.replace("/login");
      return false;
    } else if (
      localStorage.getItem("isVisted") === null ||
      localStorage.getItem("isVisted") === "false"
    ) {
      localStorage.setItem("isVisted", true);
      window.location.replace(
        location.origin + localStorage.getItem("prevPath")
      );
      localStorage.removeItem("prevPath");
      return false;
    }
  }
  localStorage.removeItem("authedUser");
  localStorage.setItem("isVisted", false);
  let result = next(action);
  return result;
};

export default checkLoggedIn;
