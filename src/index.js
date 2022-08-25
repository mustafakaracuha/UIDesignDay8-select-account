import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import store from "./stores";
import "./reset.css";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <Provider store={store}>
    <App />
    <ToastContainer 
    position="top-right"
    autoClose={21000}
    hideProgressBar
    newestOnTop={false}
    closeOnClick
    rtl={false}
    />
  </Provider>
  </>
);
