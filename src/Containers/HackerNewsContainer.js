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
    // console.log(HackerNews)

    const PromiseList = HackerNews.map((promise) => {
        return fetch(`https://hacker-news.firebaseio.com/v0/item/${promise}.json`)
        .then(thing => thing.json())
    });
    const test = Promise.all(PromiseList)
    console.log(test)
    console.log(PromiseList[0])
    // const test = PromiseList.then(thing => thing.json())

    // console.log(test[0].title)

    // const test = fetch("https://hacker-news.firebaseio.com/v0/item/27139363.json")


    
    return (
        <NewsList />
    );
};

export default HackerNewsContainer