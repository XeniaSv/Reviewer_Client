import './stylesReviewList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {useEffect, useRef, useState} from "react";
import useStyles from "./stylesReviewList";
import ReviewItem from "../reviewItem/ReviewItem";
import {getIds} from "../../context/reviewContext/apiCalls";

function ReviewList({itemId}) {

    const classes = useStyles();

    const [isMoved, setIsMoved] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);
    const [clickLimit, setClickLimit] = useState(window.innerWidth / 230);

    const [reviews, setReviews] = useState([]);

    const listRef = useRef();

    useEffect(async () => {
        const reviewIds = await getIds(itemId);
        setReviews(reviewIds.data);
    }, [itemId]);

    const handleClick = (direction) => {
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50;
        if (direction === 'left' && slideNumber > 0) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translateX(${300 + distance}px)`;
        }
        if (direction === 'right' && slideNumber < 10 - clickLimit) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translateX(${-300 + distance}px)`;
        }
    }
    return (
        <div className={classes.list}>
            <div className={classes.listTitle}>Reviews</div>
            {reviews.length === 0 ?
            <div className={classes.listEmpty}>
                There is no reviews
            </div> :
                <div className={classes.wrapper}>
                    <ArrowBackIosOutlined className={classes.sliderArrowLeft}
                                          onClick={() => handleClick('left')}
                                          style={{display: !isMoved && 'none'}}
                    />
                    <div className={classes.container} ref={listRef}>
                        {reviews.map((id) => (
                            <ReviewItem reviewId={id}/>
                        ))}
                    </div>
                    <ArrowForwardIosOutlined className={classes.sliderArrowRight}
                                             onClick={() => handleClick('right')}
                    />
                </div>
            }
        </div>
    );
}

export default ReviewList;