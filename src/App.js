import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './comps/pages/Home';
import Info from  "./comps/pages/Info" ;

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/coin/:id">
            <Info />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="#">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
