import './App.css';
import{useState,createContext} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {CartProvider} from './Context/CartContext'
import Cart from './components/Cart/Cart'

const Notification=({message})=>{
  const notificationStyle={
    position:'absolute',
    top: 50,
    right: 50,
    backgroundColor:'violet',
    color:'white',
    padding:'10px 20px 10 20px',
  }

  if(!message){
    return null;
  }

  return(
    <div style={notificationStyle}>
      {message}
    </div>
  )  
}
export const NotificationContext = createContext()

function App() {
  const [message, setMesagge] = useState('')

  const setNotification = (message) => {
    setMesagge(message)

    setTimeout(() => {
      setMesagge('');
    }, 2000)
  }
  
  return (
    <div className="App">
      <NotificationContext.Provider value={setNotification}> 
        <CartProvider>
          <Notification message={message}/>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting='Todos nuestros productos'/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting='Productos filtrados'/>} />
              <Route path='/detail/:productId' element={<ItemDetailContainer  />} />
              <Route path='/cart/' element={<Cart />} />
              
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </NotificationContext.Provider>
    </div>
    );
}

export default App;
