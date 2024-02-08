import { thunk } from "redux-thunk";
import logger from "./logger";
import checkLoggedIn from "./checkLoggedIn";
import { applyMiddleware } from "redux";

export default applyMiddleware(checkLoggedIn, thunk, logger);
