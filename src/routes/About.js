import React from 'react';

const About = ({match}) => { // match라는 props
    return (
        <div>
            {match.params.username} 의 소개 {/* 넘겨받은 URL Parameter 처리 */}
        </div>
    );
};

export default About;