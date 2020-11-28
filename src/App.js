import Navbar from './components/Navbar'
import Home from './components/Home'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/" component={Home} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
