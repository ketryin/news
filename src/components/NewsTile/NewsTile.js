import React from "react";
import { Grid, Container, Item } from '@mui/material';
import './NewsList.scss';

function NewsTile({ imageUrl, datePublished, title, summary, searchText }) {

    return (
        <Container fixed>
            <img src={imageUrl} alt="news image" className="news-image" />
            <p>{datePublished}</p>
        </Container>

    );
}

export default NewsTile;