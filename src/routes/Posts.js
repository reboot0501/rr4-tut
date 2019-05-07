/**
 * Component 내부에서 URL 이동 적용
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';

const Post = ({match}) => {
    return (
        <h2>
            {match.params.title}
        </h2>
    );
}

const Posts = () => {
    return (
        <div>
            <h1>포스트</h1>
            <Link to="/posts/react">React</Link><br/>
            <Link to="/posts/redux">Redux</Link><br/>
            <Link to="/posts/relay">Relay</Link>
            <Route path="/posts/:title" component={Post} />        
        </div>
    );
};

export default Posts;