import { React, useEffect, useState } from 'react';
import { useLocation, useParams } from "react-router";
import { Link } from 'react-router-dom';
import { Container, CircularProgress } from '@mui/material';
import { getArticleById } from '../api/news-api';

function NewsPage() {

    const { id } = useParams();
    const location = useLocation();

    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(id).then(article => setArticle(article));
    });

    return (
        <>
            {!article
                ? <CircularProgress size={120}/>
                : <div>
                    <Container maxWidth='sm'>
                        <h1>{article.title}</h1>
                        <p>{article.summary}</p>
                    </Container>

                    <Link to={{pathname: `/`, state : { from : location } }}>Back to main page</Link>
                </div>
            }
        </>
    )
}

export default NewsPage;