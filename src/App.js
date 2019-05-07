import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div> { /* 실제 URL 이동처리 */ }
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} /> { /*Route URL Paramter 전달 -> /:username */ }
        </div>
      </div>
    </Router>
  );
}

export default App;
