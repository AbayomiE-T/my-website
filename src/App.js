import Navbar from './components/Navbar'
import Home from './components/Home'
import Mjlonir from './components/Portfolio/Mjlonir'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (

    <Router>
      <Switch>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/Mjlonir" component={Mjlonir} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
