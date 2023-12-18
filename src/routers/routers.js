import { createBrowserRouter } from "react-router-dom";
import MainScreen from "../Pages/MainScreen/MainScreen";
import InputScreen from "../Pages/InputScreen/InputScreen";
import TextareaScreen from "../Pages/TextareaScreen/TextareaScreen";


const options = {
  basename: '/test',
}

export const routers = createBrowserRouter([
  {
    path: '/main',
    element: <MainScreen /> ,

  },
  {
    path: '/input',
    element: <InputScreen /> ,

  },
  {
    path: '/textarea',
    element: <TextareaScreen /> ,

  }
],
options
)