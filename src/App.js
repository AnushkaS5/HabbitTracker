
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AlbumCard from './Components/AlbumCard/albumCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
      <ToastContainer />
    </div>
  );
}

export default App;

