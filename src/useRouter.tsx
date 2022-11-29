import Edit from "./routes/Edit";
import New from "./routes/New";
import Root from "./routes/Root";
import Trash from "./routes/Trash";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Draft from "./routes/Draft";

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
          path: "draft_todo",
          element: <Draft />,
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