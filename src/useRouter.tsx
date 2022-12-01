import Edit from "./routes/Edit";
import New from "./routes/New";
import Root from "./routes/Root";
import Trash from "./routes/Trash";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Show from "./routes/Show";

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
          path: "show_todo",
          element: <Show />,
        },
        {
          path: "edit_todo",
          element: <Edit />,
          children: [
            {
              path: ":editId",
            },
          ],
        },
        {
          path: "trash",
          element: <Trash />,
        }
      ])
  ) 
} 