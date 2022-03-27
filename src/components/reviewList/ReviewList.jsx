import './stylesReviewList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import useStyles from "./stylesReviewList";
import ReviewItem from "../reviewItem/ReviewItem";
import {getIds} from "../../context/reviewContext/apiCalls";
import {Carousel} from '@trendyol-js/react-carousel';

function ReviewList({itemId, updateListReview, setUpdateListReview}) {

    const classes = useStyles();

    const [reviewsIds, setReviewsIds] = useState([]);

    // const listRef = useRef();

    useEffect(async () => {
        const reviewIds = await getIds(itemId);
        setReviewsIds(reviewIds.data);
        setUpdateListReview(false);
    }, [itemId, updateListReview]);

    return (
        <div className={classes.list}>
            <div className={classes.listTitle}>Reviews</div>
            {reviewsIds.length === 0 ?
                <div className={classes.listEmpty}>
                    There is no reviews
                </div> :
                <Carousel
                    className={classes.container}
                    show={3.5}
                    slide={1}
                    transition={0.5}
                    infinite={false}
                    dynamic={true}
                    rightArrow={<ArrowForwardIosOutlined className={classes.sliderArrowRight}/>}
                    leftArrow={<ArrowBackIosOutlined className={classes.sliderArrowLeft}/>}
                >
                    {reviewsIds.map((id) => {
                        return <ReviewItem key={id} reviewId={id}/>
                    })}
                </Carousel>
            }
        </div>
    );
}

export default ReviewList;