/**
 * URL Query String 적용 
 */
import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            => 입력 검색어 [ {new URLSearchParams(location.search).get('keyword')} ]
        </div>
    );
};

export default Search;