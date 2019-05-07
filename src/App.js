/**
 * 1차 Route & Header 메뉴 (Link) 적용
 * 2차 NavLink (CSS 적용) 이동적용, Component 내부에서 Link 적용 Posts Component 반영
 * 3차 Redirect 적용, MyPage / Login Component 적용
 * 4차 URL Query String 적용
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './routes/Home';
import About from './routes/About';
import Posts from './routes/Posts';
import MyPage from './routes/MyPage';
import Login from './routes/Login';
import Search from './routes/Search';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div> { /* 실제 URL 이동처리 */ }
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} /> { /*Route URL Paramter 전달 -> /:username */ }
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login}/>
          <Route path="/me" component={MyPage}/>
          <Route path="/search" component={Search}/>                  
        </div>
      </div>
    </Router>
  );
}

export default App;
