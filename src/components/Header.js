/**
 * Header 메뉴 Component
 * 1차 Link Component URL 이동적용
 */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="item" activeClassName="active" >홈</Link>
            <Link to="/about/이태장" className="item" activeClassName="active" >소개</Link>
        </div>
    );
};

export default Header;