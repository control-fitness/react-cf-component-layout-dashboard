import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Base from '../src';

const App = () => (
  <Router>
    <Route exact path="/" component={Base} />
  </Router>
);

export default App;
