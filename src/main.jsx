import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import middleware from "./middleware";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducer, middleware);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Container bg="dark" data-bs-theme="dark">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Container>
);
