import React, {createContext, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Components/Home/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";

import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import ServiceList from "./Components/ServiceList/ServiceList";
import SubmitReview from "./Components/SubmitReview/SubmitReview";
import AddService from "./Components/AddService/AddService";

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});

  return (

      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Header/>

              <Switch>
                  <Route exact path="/">
                      <Home />
                  </Route>

                  <Route path="/login">
                      <Login />
                  </Route>

                  <PrivateRoute path="/placeorder/:servicename">
                      <PlaceOrder/>
                  </PrivateRoute>

                  {/*<Route path="/placeorder/:servicename">*/}
                  {/*    <PlaceOrder />*/}
                  {/*</Route>*/}

                  <PrivateRoute path="/servicelist">
                      <ServiceList />
                  </PrivateRoute>

                  <PrivateRoute path="/submitreview">
                      <SubmitReview />
                  </PrivateRoute>

                  <PrivateRoute path="/addservice">
                      <AddService />
                  </PrivateRoute>

              </Switch>

          </Router>

      </UserContext.Provider>

  );
}

export default App;
