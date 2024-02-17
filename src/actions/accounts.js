export const RECEIVE_ACCOUNTS = "RECEIVE_ACCOUNTS";

export function receiveAccounts(accounts) {
  return {
    type: RECEIVE_ACCOUNTS,
    accounts,
  };
}
