import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Main from "pages/application/main-page/main";
import store from "pages/application/main-page/store";
// eslint-disable-next-line import/order
import ReactDOM from "react-dom/client";
// eslint-disable-next-line import/order
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
   <BrowserRouter>
      <Provider store={store}>
         <MantineProvider>
            <Main />
         </MantineProvider>
      </Provider>
   </BrowserRouter>
);
