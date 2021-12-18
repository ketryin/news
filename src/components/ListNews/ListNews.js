import React from "react";
import { Grid} from '@mui/material';
import NewsItem from "../NewsItem/NewsItem";


function ListNews({news, keyword}) {

    return (
        <Grid container spacing={2}>
            {news.map(({ id, imageUrl, title, summary, updatedAt}) => (
                <NewsItem key={id} keyword={keyword} id={id} imageUrl={imageUrl} datePublished={updatedAt} title={title} summary={summary}/>
            ))}
        </Grid>
    );
}

export default ListNews;