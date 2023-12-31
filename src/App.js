import './App.css';
import Navbar from "./components/navbar.js"
import Home from "./components/home.js"
import Register from "./components/signup"
import Signin from "./components/signin.js"
import { BrowserRouter as Router,Switch,Route,} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='main'>
          <Switch>
          <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Signin' >
              <Signin />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
          </Switch>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
