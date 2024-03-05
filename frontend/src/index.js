import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./components/App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import router from "./Router";
import Spinner from "./components/Spinner";
import { store } from "./store/store";


import "flowbite";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Suspense fallback={<Spinner className="h-100" />}>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<Spinner className="h-100" />} />
      </Provider>
    </React.StrictMode>
  </Suspense>
);

serviceWorkerRegistration.register();
