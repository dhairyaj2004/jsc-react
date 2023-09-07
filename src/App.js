import './App.css';
import Navbar from "./components/navbar.js"
import Home from "./components/home.js"
import Register from "./components/signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Switch>
          <Route exact path='/'> */}
            <Home />
          {/* </Route> */}
          {/* <Route path='/register'>
            <Register />
          </Route> */}
          {/* <Register/> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;
