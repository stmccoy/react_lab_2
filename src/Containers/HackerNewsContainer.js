import React, {useState, useEffect} from 'react';
import NewsList from '../Components/NewsList'


const HackerNewsContainer = () => {

    const [HackerNews, setHackerNews] = useState([]);

    useEffect(() =>{
        getHackerNews();
    }, []);

    const getHackerNews = function () {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(NewsIds => NewsIds.json())
        .then(HackerNewsArray => setHackerNews(HackerNewsArray));
        
    };
    console.log(HackerNews)
    
    return (
        <NewsList />
    );
};

export default HackerNewsContainer