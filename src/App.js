import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homapge.component";
import Shop from "./pages/shop/shop.component";

import { Switch, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/shop" component={Shop} />
            </Switch>
        </div>
    );
}

export default App;
