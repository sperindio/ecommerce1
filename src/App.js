import React, { useEffect } from "react";

//React-Router-Dom import
import { Route, Switch, Redirect } from "react-router-dom";

//Components import
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";
import { useSelector, useDispatch } from "react-redux";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";

//Selectors
import { selectCurrentUser } from "./redux/user/user.selectors";

//Style import
import "./App.css";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  /*     this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //auth.onAuthStateChanged is a native method of Firebase auth that lets us listen to changes to the login state
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //Below, we'll set the state to the user data we get from DB
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        //if the userAuth is false (null or logout), the app will set the state to null
        setCurrentUser(userAuth);
      }
    }); */

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
