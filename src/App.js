import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'
import { NotificationProvider } from './notification/NotificationService'
import AppRouter from "./components/AppRouter/AppRouter";


function App() {

  return (
    <div className="App">
      <NotificationProvider>
        <CartProvider>
          <BrowserRouter>
            <Navbar />
            <AppRouter/>
          </BrowserRouter>
        </CartProvider>
      </NotificationProvider>
    </div>
    );
}

export default App;
