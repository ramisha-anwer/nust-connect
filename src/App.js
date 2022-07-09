import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { useEffect } from 'react';
import {getUserAuth} from './actions'
import { connect } from 'react-redux';

function App(props) {
  useEffect(()=>{
props.getUserAuth()
  }, [])

  return (
    <Router>
    <div className="App">
        <Routes>
          <Route  path='/' element={<Login />}></Route>
          <Route exact path="/home" element={<><Header /> <Home/></>}/>
          
        </Routes>
    </div>
    </Router>
  );
}

const mapStateToProps= (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: ()=> dispatch(getUserAuth)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
 