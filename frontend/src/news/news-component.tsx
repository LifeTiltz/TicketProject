import { useState, useEffect } from "react";
import Article from "./Article";

export type MyNews = {
    id: number,
    title: string,
    content: string,
};

const News = () => {
    const [news, setNews] = useState<MyNews[]>([])


    useEffect(() => {
        /*fetch("http://localhost:3000/api/news")
            .then(response => response.json())
            .then(response => setNews(response))*/
        setNews([
            {id: 1, title: 'Students discount ', content: 'Now you can ask about our students discount'},
            {id: 2, title: 'Covid-19 updates', content: 'Starting from today, wearing face masks will be mandatory.'},
            {id: 3, title: 'Validating tickets', content: 'Please remember to validate your ticket, otherwise you might pay a fine.'},
            {id: 4, title: 'Electric busses are on the way ', content: 'The environmental friendly busses will be tested for 5 days.'},
        ])    
    }, []); 

    return (
        <div className="news-container">
            {news && news.map((article) => (
              <Article article={article}/>

            ))}
        </div>
    );
};

export default News;