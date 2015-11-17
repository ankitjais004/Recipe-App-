import { React } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import Home from "./Home_Page";

let mergeOnto = document.querySelector("body");

render(
  <Provider>
    <Home />
  </Provider>,
  mergeOnto
)
