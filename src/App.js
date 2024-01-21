import './App.css';
import Navbar from "./components/navbar.js"
import Home from "./components/home.js"
import Register from "./components/signup"
import Signin from "./components/signin.js"
import Material from "./components/material.js"
import { BrowserRouter as Switch,Route, BrowserRouter,} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='main'>
        <Home /> 
         <Signin />
        <Register />
        <Material/>
          {/* <Switch>
          <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Signin' >
              <Signin />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/Material'>
              <Material />
            </Route>
          </Switch> */}
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
