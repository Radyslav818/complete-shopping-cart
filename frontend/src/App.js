import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./componets/NavBar";
import Cart from "./componets/Cart";
import Home from "./componets/Home";
import NotFound from "./componets/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
