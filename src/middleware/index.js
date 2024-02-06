import { thunk } from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";
import checkLoggedIn from "./checkLoggedIn";

export default applyMiddleware(checkLoggedIn, thunk, logger);
