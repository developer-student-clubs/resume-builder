import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import Signup from './components/SignUP/Signup';
import Signin from './components/SignIN/Signin';
import {BrowserRouter as Router ,Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
