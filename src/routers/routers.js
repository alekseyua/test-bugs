import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../Pages/MainScreen/MainScreen";


const options = {
  basename: '/test',
}

export const routers = createBrowserRouter([
  {
    path: '/main',
    element: <MainScreen /> ,

  }
],
options
)