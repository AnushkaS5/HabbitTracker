
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import AlbumCard from './albumCard';

import { store } from './redux/Store/store';
import { Provider } from 'react-redux';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        { index: true, element: <AlbumCard /> },
       
  
      ],
     
    },
  
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
      
      </header>
    </div>
  );
}

export default App;

