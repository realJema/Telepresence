/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Telepresence from "views/Telepresence.js";
import NousJoindre from "views/NousJoindre.js";
import Description from "views/Description.js";
import Reserver from "views/Reserver";
import Confirmation from "views/Confirmation";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route
        path="/telepresence"
        exact
        render={(props) => <Telepresence {...props} />}
      />
      <Route
        path="/telepresence/contactUs"
        exact
        render={(props) => <NousJoindre {...props} />}
      />
      <Route
        path="/telepresence/details"
        exact
        render={(props) => <Description {...props} />}
      />
      <Route
        path="/telepresence/reserver"
        exact
        render={(props) => <Reserver {...props} />}
      />
      <Route
        path="/telepresence/reserver/confirmation"
        exact
        render={(props) => <Confirmation {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
