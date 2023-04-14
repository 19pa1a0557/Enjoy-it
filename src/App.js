import './App.css';
import{Routes,Route} from "react-router-dom";
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import Restaurant from './Restaurant';
import React from "react";
import ErrorPage from './Error';
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/restaurant' element={<Restaurant/>} />
          <Route path='/login' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
