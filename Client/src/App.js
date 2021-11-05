import { HomePage } from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { UserPage } from "./Pages/UserPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/:userid">
        <UserPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
