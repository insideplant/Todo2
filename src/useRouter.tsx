

import Edit from "./routes/Edit";
import New from "./routes/New";
import Root from "./routes/Root";
import Trash from "./routes/Trash";

import {
    createBrowserRouter,
  } from "react-router-dom";

export default function useRouter() { 
  return(
    createBrowserRouter([
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
      ])
  ) 
} 