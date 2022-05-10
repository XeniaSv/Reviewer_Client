import './stylesReviewList'
import {ArrowBackIosOutlined, ArrowForwardIosOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import useStyles from "./stylesReviewList";
import ReviewItem from "../reviewItem/ReviewItem";
import {getIdsByItemId} from "../../../context/reviewContext/apiCalls";
import {Carousel} from '@trendyol-js/react-carousel';

function ReviewList({ itemId, updateListReview, setUpdateListReview}) {

    const classes = useStyles();

    const [reviewsIds, setReviewsIds] = useState([]);

    useEffect(async () => {
        const reviewIds = await getIdsByItemId(itemId);
        setReviewsIds(reviewIds.data);
        setUpdateListReview(false);
    }, [itemId, updateListReview]);

    return (

        <div className={classes.list} >
            <div className={classes.listTitle}>Рецензии</div>
            {reviewsIds.length === 0 ?
                <div className={classes.listEmpty}>
                    Нет рецензий
                </div> :
                        <Carousel
                            className={classes.container}
                            show={
                                (innerWidth < 440) ? 1 :
                                    ((innerWidth >= 440 && innerWidth < 500) ? 1.2 :
                                            ((innerWidth >= 500 && innerWidth < 620) ? 1.5 :
                                                    ((innerWidth >= 620 && innerWidth < 700) ? 1.7 :
                                                            ((innerWidth >= 700 && innerWidth < 800) ? 2 :
                                                                    ((innerWidth >= 800 && innerWidth < 930) ? 2.5 :
                                                                            ((innerWidth >= 930 && innerWidth < 1000) ? 3 :
                                                                                    ((innerWidth >= 1000 && innerWidth < 1100) ? 3.5 :
                                                                                            ((innerWidth >= 1300 && innerWidth < 1600) ? 5 :
                                                                                                    ((innerWidth >= 1600 && innerWidth < 1800) ? 5.5 :
                                                                                                            ((innerWidth >= 1800 && innerWidth < 2200) ? 6 :
                                                                                                                    ((innerWidth >= 2200 && innerWidth < 2800) ? 8 :
                                                                                                                            ((innerWidth >= 2800) ? 9 : 4)
                                                                                                                    )
                                                                                                            )
                                                                                                    )
                                                                                            )
                                                                                    )
                                                                            )
                                                                    )
                                                            )
                                                    )
                                            )
                                    )
                            }
                            slide={1}
                            transition={0.5}
                            infinite={false}
                            dynamic={true}
                            rightArrow={<ArrowForwardIosOutlined className={classes.sliderArrowRight}/>}
                            leftArrow={<ArrowBackIosOutlined className={classes.sliderArrowLeft}/>}
                        >
                            {reviewsIds.map((id) => {
                                return <ReviewItem  key={id} reviewId={id}/>
                            })}
                        </Carousel>

            }
        </div>
    );
}

export default ReviewList;