
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Router>
    <div className="App">
        <Routes>
          <Route  path='/' element={<Login />}></Route>
          <Route exact path="/home" element={<><Header/><Home/></>}/>
          
        </Routes>
    </div>
    </Router>
  );
}

export default App;
