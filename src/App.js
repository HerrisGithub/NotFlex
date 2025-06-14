import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import BrowsePage from "./pages/BrowsePage";
import ProfilePage from "./pages/ProfilePage";
import StreamVideoPage from "./pages/StreamVideoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/signin">
          <SigninPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/browse">
          <BrowsePage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/video">
          <StreamVideoPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
