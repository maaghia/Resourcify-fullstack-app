import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Resource from './components/Resource';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Resource/>
    <Routes>
      <Route path="/" element={""} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
