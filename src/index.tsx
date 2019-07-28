import * as React from "react";
import { render } from "react-dom";
import { Provider } from "./provider";
import { USER_REGISTER_MUTATION } from "./use-user-register-mutation";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");

const mocks = [
  {
    request: {
      query: USER_REGISTER_MUTATION,
      variables: {
        input: {
          login: "peter",
          password: "password1",
          email: "peter@shallnotreply.com"
        }
      }
    },
    result: {
      data: {
        __typename: "UserRegisterResultSuccess",
        user: {
          id: "1",
          login: "peter"
        }
      }
    }
  }
];

render(
  <Provider mocks={mocks}>
    <App />
  </Provider>,
  rootElement
);
