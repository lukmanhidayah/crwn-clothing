import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import SignInSignUp from "./components/sign-in-sign-up/SignInSignUp";
import { auth } from "./firebase/firebase.utils";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
