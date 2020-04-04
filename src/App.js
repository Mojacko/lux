import React from "react";
import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homapge.component";
import SignInRegister from "./pages/signin-register/signin-register.component";
import Shop from "./pages/shop/shop.component";


import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/signin" component={SignInRegister} />
                
            </Switch>
        </div>
    );
}

export default App;
