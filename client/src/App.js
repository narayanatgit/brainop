
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Nav from './Nav';

import Posts from './Posts';

import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div >
  
      
       <Router>

        <Routes>
          <Route  path='/' element={<Signup/>}/>
          <Route path='/signin' element={<Login/>}/>
        
          <Route path='/posts'  element={<Posts/>}/>
        
          
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
