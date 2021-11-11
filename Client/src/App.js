import { HomePage } from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { UserPage } from "./Pages/UserPage";
import { MyPage } from "./Pages/MyPage";
import { NewsPage } from "./Pages/NewsPage";
import { GroupsPage } from "./Pages/GroupsPage";
import { ExplorePage } from "./Pages/ExplorePage";

import NavBar from './components/navBar/NavBar';
import PopularPosts from './components/PopularPosts/PopularPosts';
// import Button from '@mui/material/Button';
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
      <Route exact path="/news">
        <NewsPage />
      </Route>
      <Route exact path="/explore">
        <ExplorePage />
      </Route>
      <Route exact path="/groups">
        <GroupsPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
