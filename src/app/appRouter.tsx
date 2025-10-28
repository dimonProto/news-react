
import {
  createBrowserRouter,
} from "react-router";
import BaseLayout from "./layouts/BaseLayout";
import { Main } from "@/pages/main";
import { NewsPage } from "@/pages/news";

export let AppRouter = createBrowserRouter([
  {
    element: <BaseLayout/>,
    errorElement: <div>Error</div>,
    children: [{path: "/", element: <Main/>},
        {path: "/news/:id", element: <NewsPage/>}]
  },
]);

