import React from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const NewsItem = ({id, imageUrl, datePublished, title, summary,}) => {

    const location = useLocation();

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{
                    height: '100%',
                }}
            >
                <CardMedia
                    image={imageUrl}
                    component="img"
                    alt={title}
                    title={title}
                    sx={{ height: 140 }}
                />
                <CardContent>
                    <Typography
                        variant="h5"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                    >
                        {summary}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={{pathname: `/${id}`, state : { from : location } }}>
                        <Button variant="text">
                            Read more →
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewsItem;