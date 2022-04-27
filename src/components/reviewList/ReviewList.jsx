import './stylesReviewList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import useStyles from "./stylesReviewList";
import ReviewItem from "../reviewItem/ReviewItem";
import {getIds} from "../../context/reviewContext/apiCalls";
import {Carousel} from '@trendyol-js/react-carousel';

function ReviewList({itemId, updateListReview, setUpdateListReview}) {

    const classes = useStyles();

    const [reviewsIds, setReviewsIds] = useState([]);


    useEffect(async () => {
        const reviewIds = await getIds(itemId);
        setReviewsIds(reviewIds.data);
        setUpdateListReview(false);
    }, [itemId, updateListReview]);

    return (
        <div className={classes.list}>
            <div className={classes.listTitle}>Рецензии</div>
            {reviewsIds.length === 0 ?
                <div className={classes.listEmpty}>
                    Нет рецензий
                </div> :
                ((innerWidth <= 600) ?
                        <Carousel
                            className={classes.container}
                            show={1}
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
                        </Carousel> :
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
                )

            }
        </div>
    );
}

export default ReviewList;