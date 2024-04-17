import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./Home.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "chartist/dist/chartist.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false,
      // refetchOnmount: false,
      // refetchOnReconnect: false,
      // retry: 1,
      // staleTime: 5 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorkerRegistration.register();
