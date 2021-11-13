import { HomePage } from "./Pages/HomePage";
import { Switch, Route } from "react-router-dom";
import { ErrorPage } from "./Pages/ErrorPage";
import { UserPage } from "./Pages/UserPage";
import { MyPage } from "./Pages/MyPage";
import { NewsPage } from "./Pages/NewsPage";
import { GroupsPage } from "./Pages/GroupsPage";
import { ExplorePage } from "./Pages/ExplorePage";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { ForgotPw } from "./Pages/ForgotPw";
import { ResendConfirmPage } from "./Components/UserAuthPages/ResendConfirmPage";
import { SearchResPage } from "./Pages/SearchResPage";
import { GroupListPage } from "./Pages/GroupListPage";

import { MessengerPage } from "./Pages/MessengerPage";
// import Button from '@mui/material/Button';git
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
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      <Route exact path="/forgotpassword">
        <ForgotPw />
      </Route>
      <Route exact path="/resend">
        <ResendConfirmPage />
      </Route>
      <Route exact path="/messanger">
        <MessengerPage />
      </Route>
      <Route exact path="/posts/:postid">
        <ErrorPage />
      </Route>
      <Route exact path="/search">
        <SearchResPage />
      </Route>
      <Route exact path="/groups/browse/featured">
        <GroupListPage />
      </Route>
      <Route exact path="/groups/browse/member">
        <GroupListPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
