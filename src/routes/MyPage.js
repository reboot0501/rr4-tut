/**
 * Redirect 적용
 */
import React from 'react';
import { Redirect } from 'react-router-dom';

const logged = false;

const MyPage = () => {
    return (
        <div>
            {   // 로그인 상태가 아니면 Login Page로 이동
                !logged && <Redirect to="/login"/>
            }
            <h1>마이페이지</h1>
        </div>
    );
};

export default MyPage;