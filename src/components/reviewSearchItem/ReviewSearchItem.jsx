import * as React from 'react';
import {useEffect, useState} from 'react';
import useStyles from "./stylesReviewSearchItem";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThumbUpAltOutlined} from "@mui/icons-material";
import ReviewModal from "../reviewModal/ReviewModal";
import {getReviewById, putLike} from "../../context/reviewContext/apiCalls";
import {Grid} from '@mui/material';
import {getMovie} from "../../context/movieContext/apiCalls";
import {getOneSeries} from "../../context/seriesContext/apiCalls";
import {getBook} from "../../context/bookContext/apiCalls";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';

function ReviewSearchItem({reviewId, tabValue}) {
    const classes = useStyles();
    const [review, setReview] = useState({});
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('');

    useEffect(async () => {
        setLoading(true);
        const reviewData = await getReviewById(reviewId);
        if (reviewData.status === 200) {
            setReview(reviewData.data);
        }
        switch (tabValue) {
            case '1':
                const movieData = await getMovie(reviewData.data.itemId);
                if (movieData.status === 200) {
                    setItem(movieData.data);
                    setType('movie');
                }
                break;
            case '2':
                const seriesData = await getOneSeries(reviewData.data.itemId);
                if (seriesData.status === 200) {
                    setItem(seriesData.data);
                    setType('series');
                }
                break;
            case '3':
                const bookData = await getBook(reviewData.data.itemId);
                if (bookData.status === 200) {
                    setItem(bookData.data);
                    setType('book');
                }
                break;
        }

        setLoading(false);
    }, [reviewId]);

    const handleLike = async () => {
        const reviewData = await putLike(reviewId);
        if (reviewData.status === 201) {
            setReview(reviewData.data);
        }
    };

    return (
        <>
            <Grid
                container
                className={classes.listItem}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {loading ?
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box>
                    :
                    <>
                        <Grid>
                            <img className={classes.image}
                                 src={item.imgSm}
                                 alt=""/>
                        </Grid>
                        <Grid className={classes.info}>
                            <Typography gutterBottom variant="h6" component="div" color='#5a697c'>
                                {review.title}
                            </Typography>
                            <Typography gutterBottom variant="body2" component="div" color='#5a697c'>
                                {item.title}
                            </Typography>
                            <Button className={classes.buttonLikes} onClick={handleLike} variant="contained"
                                    size="small">
                                <span className={classes.reviewRating}>{review.likes}</span>
                                <ThumbUpAltOutlined className={classes.reviewIcon}> </ThumbUpAltOutlined>
                            </Button>
                            <Typography variant="body2" color="#5a697c">
                                {review.author}
                            </Typography>
                            <Typography className={classes.textReview} variant="body2" color="#5a697c">
                                {review.textReview}
                            </Typography>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                            >
                                <ReviewModal review={review} setReview={setReview}/>
                                <Link className="link" to={{pathname: '/itemPage', search: `?type=${type}&id=${item.id}`}}>
                                    <Button size="small" className={classes.button} variant="contained">
                                        Перейти к предмету
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </>
                }


            </Grid>
            <hr className={classes.line}/>
        </>
    );
}

export default ReviewSearchItem;
