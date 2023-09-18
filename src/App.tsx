import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from 'pages/Landing';
import Welcome from 'pages/Welcome';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>
    </Router>
  );
}

export default App;
