import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/Header";
import SignInSignUp from "./components/sign-in-sign-up/SignInSignUp";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { useDispatch } from "react-redux";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { setCurrentUser } from "./redux/user/userAction";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      dispatch(setCurrentUser(userAuth));
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
