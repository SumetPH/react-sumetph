import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/app/Loading";

const Nav = lazy(() => import("./components/app/Nav"));
const Resume = lazy(() => import("./views/Resume"));
const Portfolio = lazy(() => import("./views/Portfolio"));
const Contact = lazy(() => import("./views/Contact"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
