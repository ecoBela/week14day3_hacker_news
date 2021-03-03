import React, { Fragment, useState, useEffect} from 'react';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';

const NewsBox = () => {
    
    return(
        <>
            <h1>This is a newsbox</h1>
            <SearchBar/>
            <NewsList/>
        </>
    )
}

export default NewsBox;