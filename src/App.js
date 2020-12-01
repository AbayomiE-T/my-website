import Navbar from './components/Navbar'
import Home from './components/Home'
import Mjlonir from './components/Portfolio/Mjlonir'
import StudioSixtySix from './components/Portfolio/StudioSixtySix'
import Soundboard from './components/Portfolio/Soundboard'

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Mjlonir" component={Mjlonir} />
          <Route path="/StudioSixtySix" component={StudioSixtySix} />
          <Route path="/Soundboard" component={Soundboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
