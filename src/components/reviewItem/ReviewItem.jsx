import * as React from 'react';
import {useEffect, useState} from 'react';
import useStyles from "./stylesReviewItem";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {ThumbUpAltOutlined} from "@mui/icons-material";
import ReviewModal from "../reviewModal/ReviewModal";
import {getReviewById, putLike} from "../../context/reviewContext/apiCalls";


function ReviewItem({reviewId}) {
    const classes = useStyles();
    const [review, setReview] = useState({});

    useEffect(async () => {
        const reviewData = await getReviewById(reviewId);
        if (reviewData.status === 200) {
            setReview(reviewData.data);
        }
    }, [reviewId]);

    const handleLike = async () => {
        const reviewData = await putLike(reviewId);
        if (reviewData.status === 201) {
            setReview(reviewData.data);
        }
    };

    return (
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
                <Button className={classes.button} onClick={handleLike} variant="contained" size="small">
                    <span className={classes.reviewRating}>{review.likes}</span>
                    <ThumbUpAltOutlined className={classes.reviewIcon}> </ThumbUpAltOutlined>
                </Button>
                <ReviewModal review={review} setReview={setReview}/>
            </CardActions>
        </Card>
    );
}

export default ReviewItem;
