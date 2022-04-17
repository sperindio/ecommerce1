import React from "react";

//React-Router-Dom import
import { Route, Switch, Redirect } from "react-router-dom";

//Components import
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/signin-signup/signin-signup.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import CheckoutPage from "./pages/checkout/checkout.component";

//Selectors
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";

//Style import
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
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
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const { currentUser } = this.props;
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
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
