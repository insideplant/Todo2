import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import Edit from "./routes/Edit";
import New from "./routes/New";
import Root from "./routes/Root";
import Trash from "./routes/Trash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "new_todo",
    element: <New />,
  },
  {
    path: "edit_todo",
    element: <Edit />,
  },
  {
    path: "trash",
    element: <Trash />,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
