import React from 'react';
import { BrowserRouter as  Router, Routes, Route , Link } from 'react-router-dom'; 
import './App.css';
import { Main } from './pages/Main/main';
import { Login } from './pages/login';
import { Navbar } from './components/navbar';
import { Createpost } from './pages/create-post/create-post';
import { Footer } from './components/Footer';
import { About } from './pages/About';


function App() {
  return (
    <div className='page-context'>
    <div className="App">
     <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={< Main/> }/>
          <Route path='/login' element={< Login/> }/>
          <Route path='/post' element={< Createpost/> }/>
          <Route path='/about' element={< About/>}/>
        </Routes>
        <div className='mainnfooter'>
        <Footer />
        </div>
        
      </Router>
      </div>
    </div>
  );
}

export default App;