import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/HomePage";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
