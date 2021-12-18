import { React, useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { getArticleById } from '../api/news-api';
import Container from '../components/Container/Container';
import './NewsPage.scss'

function NewsPage() {

    const { id } = useParams();
    const location = useLocation();

    const [article, setArticle] = useState(null);

    useEffect(() => {
        if (!article) {
            getArticleById(id).then(article => setArticle(article));
        }
    });

    return (
        <>
            {!article
                ? <CircularProgress size={120}/>
                : <div className='news-page'>
                    <img 
                        className='news-page-img'
                        src={article.imageUrl}
                        alt={article.title}/>
                        <div className='news-page-container'>
                            <div className='news-page-article'>
                                <Container>
                                    <h1>{article.title}</h1>
                                    <p>{article.summary}</p>
                                </Container>
                            </div>
                            <Link className='news-page-btn' to={{pathname: `/`, state : { from : location } }}>← Back to main page</Link>
                        </div>
                </div>
            }
        </>
    )
}

export default NewsPage;