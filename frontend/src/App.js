import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./componets/NavBar";
import Cart from "./componets/Cart";
import Home from "./componets/Home";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
