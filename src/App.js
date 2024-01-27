import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
      </Routes>
    </div>
  );
}

export default App;
