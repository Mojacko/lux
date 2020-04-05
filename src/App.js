import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homapge.component";
import Shop from "./pages/shop/shop.component";
import SignInRegister from "./pages/signin-register/signin-register.component";

import { auth } from "./firebase/firebase.util";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
        };
    }

    unSubscribedFromAuth = null;

    componentDidMount() {
        this.unSubscribedFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unSubscribedFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/signin" component={SignInRegister} />
                </Switch>
            </div>
        );
    }
}

export default App;
