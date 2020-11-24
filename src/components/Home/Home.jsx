import React, {useState, useEffect} from 'react';
import Search from './Search/Search';

function Home() {   

    function makeSearch(searchValue){
        console.log(searchValue);
        console.log("THIS  IS THE SEARCH VALUE");
    }

    return (
        <div>
            <Search makeSearch={makeSearch}/>
            <h1>This is home</h1>
        </div>
    );
}

export default Home;
