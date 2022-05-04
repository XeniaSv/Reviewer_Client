import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import useStyles from "./stylesReviewItem";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThumbUpAltOutlined} from "@mui/icons-material";
import ReviewModal from "../reviewModal/ReviewModal";
import {getReviewById, putLike} from "../../context/reviewContext/apiCalls";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {AuthContext} from "../../context/authContext/AuthContext";
import {getUserMovieRating} from "../../context/movieContext/apiCalls";
import {getUserSeriesRating} from "../../context/seriesContext/apiCalls";
import {getUserBookRating} from "../../context/bookContext/apiCalls";
import StarIcon from "@mui/icons-material/Star";
import {useLocation} from "react-router-dom";


function ReviewItem({reviewId}) {
    const classes = useStyles();
    const [review, setReview] = useState({});
    const [loading, setLoading] = useState(true);
    const [rating, setRating] = useState(0);
    const {user} = useContext(AuthContext);
    const {search} = useLocation();
    const type = new URLSearchParams(search).get('type');

    useEffect(async () => {
        setLoading(true);
        const reviewData = await getReviewById(reviewId);
        if (reviewData.status === 200) {
            setReview(reviewData.data);
        }
        switch (type) {
            case 'movie':
                const movieRatingRes = await getUserMovieRating(reviewData.data.itemId, reviewData.data.authorId);
                if (movieRatingRes.status === 200) {
                    setRating(movieRatingRes.data.rate);
                }
                break;
            case 'series':
                const seriesRatingRes = await getUserSeriesRating(reviewData.data.itemId, reviewData.data.authorId);
                if (seriesRatingRes.status === 200) {
                    setRating(seriesRatingRes.data.rate);
                }
                break;
            case 'book':
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
            {loading ?
                <Box sx={{display: 'flex'}}>
                    <CircularProgress className={classes.load} />
                </Box>
                :
                <Card sx={{maxWidth: 300, marginRight: '10px'}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" color='#5a697c'>
                            {review.author}
                        </Typography>
                        <Typography className={classes.textReview} variant="body2" color="#5a697c">
                            {review.textReview}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.buttonWrapper}>
                        <Button disabled={!user} className={classes.button} onClick={handleLike} variant="contained" size="small">
                            <span className={classes.reviewLikes}>{review.likes}</span>
                            <ThumbUpAltOutlined className={classes.reviewIcon}> </ThumbUpAltOutlined>
                        </Button>
                        <Box className={classes.ratingBox} variant="contained">
                            <span className={classes.reviewRating}>{rating}</span>
                            <StarIcon className={classes.reviewStar}> </StarIcon>
                        </Box>
                        <ReviewModal review={review} setReview={setReview}/>
                    </CardActions>
                </Card>
            }
        </>
    );
}

export default ReviewItem;
