import React from 'react';
import { BrowserRouter as  Router, Routes, Route , Link } from 'react-router-dom'; 
import './App.css';
import { Main } from './pages/Main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { Createpost } from './pages/create-post/create-post';



function App() {
  return (
    <div className="App">
     <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={< Main/> }/>
          <Route path='/login' element={< Login/> }/>
          -
          <Route path='/post' element={< Createpost/> }/>

        </Routes>
      </Router>

    </div>
  );
}

export default App;