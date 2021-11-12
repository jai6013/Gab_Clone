import { HomePage } from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { UserPage } from "./Pages/UserPage";
import { MyPage } from "./Pages/MyPage";
import GroupPage from "./Pages/GroupPage";
import Messanger from "./Components/Messanger/Messanger";


function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/users/:userid">
        <UserPage />
      </Route>
      <Route exact path="/me">
        <MyPage />
      </Route>
      <Route exact path="/group">
        <GroupPage/>
      </Route>
      <Route exact path="/messanger">
        <Messanger/>
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
