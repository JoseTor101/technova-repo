import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Technova } from "../pages/Technova";
import { Computers } from "../pages/Computers";
import { Gadgets } from "../pages/Gadgets";
import { ProductDetail } from "../pages/ProductDetail";
import { Smartphones } from "../pages/Smartphones";
import { Tvs } from "../pages/Tvs";
import { AdminPage } from "../pages/AdminPage";
import { ShoppingCart } from "../pages/ShoppingCart";
import { AboutPage } from "../pages/AboutPage";

export const Router = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/technova' component={Technova} />
                <Route path='/computers' component={Computers} />
                <Route path='/smartphones' component={Smartphones} />
                <Route path='/tvs' component={Tvs} />
                <Route path='/gadgets' component={Gadgets} />
                <Route path='/AdminPage' component={AdminPage} />
                <Route path='/AboutUs' component={AboutPage} />
                <Route path='/shoppingCart' component={ShoppingCart} />
                <Route path='/product/:id/:type' component={ProductDetail} />
            </Switch>
        </BrowserRouter>
    );
}