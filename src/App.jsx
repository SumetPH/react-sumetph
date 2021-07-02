import React, { Suspense, lazy, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Loading from "./components/app/Loading";

const Nav = lazy(() => import("./components/app/Nav"));
const Resume = lazy(() => import("./views/Resume"));
const Portfolio = lazy(() => import("./views/Portfolio"));

function App() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-gray-200">
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
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
