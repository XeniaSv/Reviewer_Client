import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import useStyles from "./stylesReviewSearchItem";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThumbUpAltOutlined} from "@mui/icons-material";
import ReviewModal from "../reviewModal/ReviewModal";
import {getReviewById, putLike} from "../../context/reviewContext/apiCalls";
import {Grid} from '@mui/material';
import {getMovie, getUserMovieRating} from "../../context/movieContext/apiCalls";
import {getOneSeries, getUserSeriesRating} from "../../context/seriesContext/apiCalls";
import {getBook, getUserBookRating} from "../../context/bookContext/apiCalls";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/authContext/AuthContext";
import StarIcon from '@mui/icons-material/Star';

function ReviewSearchItem({reviewId, tabValue}) {
    const classes = useStyles();
    const {user} = useContext(AuthContext);
    const [review, setReview] = useState({});
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState('');
    const [rating, setRating] = useState(0);

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
                const movieRatingRes = await getUserMovieRating(reviewData.data.itemId, reviewData.data.authorId);
                if (movieRatingRes.status === 200) {
                    setRating(movieRatingRes.data.rate);
                }
                break;
            case '2':
                const seriesData = await getOneSeries(reviewData.data.itemId);
                if (seriesData.status === 200) {
                    setItem(seriesData.data);
                    setType('series');
                }
                const seriesRatingRes = await getUserSeriesRating(reviewData.data.itemId, reviewData.data.authorId);
                if (seriesRatingRes.status === 200) {
                    setRating(seriesRatingRes.data.rate);
                }
                break;
            case '3':
                const bookData = await getBook(reviewData.data.itemId);
                if (bookData.status === 200) {
                    setItem(bookData.data);
                    setType('book');
                }
                const bookRatingRes = await getUserBookRating(reviewData.data.itemId, reviewData.data.authorId);
                if (bookRatingRes.status === 200) {
                    setRating(bookRatingRes.data.rate);
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
                        <CircularProgress className={classes.load}/>
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
                            <Button disabled={!user} className={classes.buttonLikes} onClick={handleLike} variant="contained"
                                    size="small">
                                <span className={classes.reviewLikes}>{review.likes}</span>
                                <ThumbUpAltOutlined className={classes.reviewIcon}> </ThumbUpAltOutlined>
                            </Button>
                            <Box className={classes.buttonRating} variant="contained">
                                <span className={classes.reviewRating}>{rating}</span>
                                <StarIcon className={classes.reviewStar}> </StarIcon>
                            </Box>
                            <Typography className={classes.author} variant="body2" color="#5a697c">
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
