import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Main from "pages/application/main-page/main";
import store from "pages/application/main-page/store";
// eslint-disable-next-line import/order
import { Provider } from "react-redux";

const root = document.getElementById("root");

console.log("SAQDQ");

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <MantineProvider>
            <Main />
         </MantineProvider>
      </Provider>
   </BrowserRouter>,
   root
);
