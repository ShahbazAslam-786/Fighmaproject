import { createBrowserRouter, Router, RouterProvider } from "react-router"
import { WebLogin } from "./Fighma/webLogin";
import { WebTask } from "./Fighma/webTask";
import { WebReminder } from "./Fighma/webReminder";
import { WebLocation } from "./Fighma/webLocation";
import { WebNewtask } from "./Fighma/webNewtask";
import "./ProjectStyling/login.css";

export const App = () => {

  const router = createBrowserRouter ([
      
        {
          path: "/",
          element: <WebLogin />,
        },

        {
          path: "webTask",
          element: <WebTask />,
        },

        {
          path: "webReminder",
          element: <WebReminder />,
        },

        {
          path: "webLocation",
          element: <WebLocation />,
        },

        {
          path: "webNewtask",
          element: <WebNewtask />,
        },
      
  ]);

  return <RouterProvider router={router}/> 
};

export default App;