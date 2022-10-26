import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>

            <Footer/>
        </Router>
    );
}

export default App;
