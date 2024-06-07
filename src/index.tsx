import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "shared/store";
import { SnackbarProvider } from "notistack";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <Provider store={store}>
    <SnackbarProvider
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      maxSnack={4}>
      <App />
    </SnackbarProvider>
  </Provider>,
);

reportWebVitals();
