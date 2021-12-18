import React from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import createMarker from 'react-content-marker';
import moment from 'moment';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import './NewsItem.scss';
import {ReactComponent as CalendarSvg} from '../../img/calendar-icon.svg';

const NewsItem = ({id, keyword, imageUrl, datePublished, title, summary}) => {

    const location = useLocation();

    const parsers = [
        {
            rule: new RegExp(keyword, 'i'),
            tag: x => <mark>{x}</mark>,
        }
    ];

    const Marker = createMarker(parsers);

    return (
        <Grid item xs={12} md={4}>
            <Card
                sx={{ height: '100%', width: 400}}
            >
                <CardMedia
                    image={imageUrl}
                    component="img"
                    alt={title}
                    title={title}
                    sx={{ height: 217 }}
                />
                <CardContent>
                    <div className="date-container">
                        <CalendarSvg className="calendar-svg"/>
                        <Typography variant="p" sx={{fontSize: '14px'}}>
                            {moment(datePublished).format('MMMM Do, YYYY')}
                        </Typography>
                    </div>
                    <Typography variant="h5" sx={{ marginBottom: '20px', marginTop: '24px'}}>
                        <Marker>{title}</Marker>
                    </Typography>
                    <Typography variant="subtitle1">
                        <Marker>{summary.substr(0, 97)+"..."}</Marker>
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link className='news-item-link' to={{pathname: `/${id}`, state : { from : location } }}>
                        <Button 
                            variant="text" 
                            sx={{ 
                                textTransform: 'none', 
                                color: ' #363636',
                                fontWeight: 700
                            }}
                        >
                            Read more →
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default NewsItem;