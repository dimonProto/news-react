import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./appStore";
import "@/shared/index.css"
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./appRouter";


createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <Provider store={store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </ThemeProvider>
);