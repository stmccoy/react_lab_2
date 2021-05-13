import React from 'react';
import NewsItem from './NewsItem';

const NewsListContent = ({stories}) => {
    
    const NewsItems = stories.map((story, index) => {
        return <NewsItem story = {story} key= {index}/>
    });

    return (
        <ul>{NewsItems}</ul>
    );

};

export default NewsListContent;