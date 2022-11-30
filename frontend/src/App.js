import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={""} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
