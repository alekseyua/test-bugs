import logo from './logo.svg';
import './App.scss';
import { RouterProvider } from 'react-router';
import { routers } from './routers/routers';

function App() {
  return (
    <RouterProvider router={routers}>
      
    </RouterProvider>
  );
}

export default App;
