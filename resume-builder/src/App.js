import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Signup from './components/SignUP/Signup';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
