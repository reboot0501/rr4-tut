/**
 * Header 메뉴 Component
 * 1차 Link Component URL 이동적용
 * 2차 NavLink (CSS 적용) 이동적용, Component 내부에서 Link 적용 Posts Component 반영
 * 3차 Redirect 적용, MyPage / Login Component 적용
 * 4차 URL Query String 적용 : http://localhost:3000/search?keyword=키워드
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active" >홈</NavLink>
            <NavLink to="/about/이태장" className="item" activeClassName="active" >소개</NavLink>
            <NavLink to="/posts" className="item" activeClassName="active">포스트</NavLink>
            <NavLink to="/me" className="item" activeClassName="active">마이페이지</NavLink>
            <NavLink to="/login" className="item" activeClassName="active">로그인</NavLink>            
            <NavLink to="/search" className="item" activeClassName="active">검색</NavLink>
        </div>
    );
};

export default Header;