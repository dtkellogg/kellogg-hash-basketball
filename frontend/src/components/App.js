import React, { lazy } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navbar from "./Navbar";
import Loading from "./Loading"

const Home = lazy(() => import('./Home'))
const Players = lazy(() => import('./Players'))
const Teams = lazy(() => import('./Teams'))

export default function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <React.Suspense fallback={<Loading />}>
        <TransitionGroup>
          <CSSTransition timeout={250} classNames="fade" key={location.key}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/players">
                <Players />
              </Route>
              <Route path="/teams">
                <Teams />
              </Route>
              <Route path="*">
                <h1 className="text-center">404</h1>
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </React.Suspense>
    </div>
  );
}
