// import "./App.css";
import { HomePage } from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
