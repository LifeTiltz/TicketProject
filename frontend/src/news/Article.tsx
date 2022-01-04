import React from 'react'
import { MyNews } from './news-component'
import './Article.css';

interface ArticleProps {
article : MyNews
}
const Article : React.FC<ArticleProps> = ({article}) => {
  return (
    
    <div className="news-grid">
      <div className="news-body">
        <p className="content">{article.content}</p>
      </div> 
      <div className = "title-grid">
      <h2 className="title">{article.title}</h2>
      </div>
      
    </div>
    
  )
}

export default Article
