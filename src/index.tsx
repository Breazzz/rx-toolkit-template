import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store/store";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

const store = setupStore()

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
