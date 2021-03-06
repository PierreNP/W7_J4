import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import MyProfile from "./components/Profile/MyProfile";
import SignUpForm from "./components/Auth/SignUpForm";
import SignInForm from "./components/Auth/SignInForm";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";

import store from "./store/index";
import UserProfile from "./components/Profile/UserProfile";

function App() {
  const token = useSelector((state) => state.auth.token);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route path="/signin">
          <SignInForm />
        </Route>
        <Route path="/users/:id">
          <UserProfile />
        </Route>
        {isLoggedIn && (
          <Route path="/profile">
            <MyProfile />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
