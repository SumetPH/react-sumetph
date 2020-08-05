import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Loading from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  // const [initial, setInitial] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setInitial(true);
  //   }, 2000);
  // });

  // if (initial === false) {
  //   return <Loading />;
  // }

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="nav">
          <ul className="nav-list">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
              <div className="nav-load"></div>
            </li>
            <li>
              <Link className="nav-link" to="/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
