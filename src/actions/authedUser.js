export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const CHECK_AUTHED_USER = "CHECK_AUTHED_USER";

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
