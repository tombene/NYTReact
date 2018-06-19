import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import Find from "./pages/Find";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Find} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Detail} />
				<Route exact path="/find" component={Find} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
