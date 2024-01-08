import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import RoutesApp from './routes';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>

    </div>
  );
}

export default App;
