import './App.css';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
      </Routes>
    </div>
  );
}

export default App;
