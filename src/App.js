import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Shipment from './components/Shipment/Shipment';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Footer from './components/FooterContainer/Footer/Footer';
import NotFound from './components/SharedPages/NotFound/NotFound';
import Manage from './components/Dashboard/Manage/Manage';
import Add from './components/Dashboard/Add/Add';
import Update from './components/Dashboard/Update/Update';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/shipment' element={<RequireAuth><Shipment></Shipment></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        {/* dashboard */}
        <Route path='/manage' element={<RequireAuth><Manage></Manage></RequireAuth>}></Route>
        <Route path='/update/:id' element={<Update></Update>}></Route>
        <Route path='/add' element={<RequireAuth><Add></Add></RequireAuth>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
