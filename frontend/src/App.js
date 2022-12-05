import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Resource from './components/Resource';
import "./App.css";
import ProfilePage from './pages/Profile';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={""} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
