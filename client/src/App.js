import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import MintToken from "./components/MintToken";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/minttoken" component={MintToken} />
       
      </Switch>
    </BrowserRouter>
  );
}

export default App;
