import {useEffect, useState} from "react";
import useStyles from "./stylesReviewSearchList";
import {getIdsByTag} from "../../context/reviewContext/apiCalls";
import ReviewSearchItem from "../reviewSearchItem/ReviewSearchItem";

function ReviewSearchList({tabValue, tag}) {

    const classes = useStyles();

    const [reviewsIds, setReviewsIds] = useState([]);

    useEffect(async () => {
        switch (tabValue) {
            case '1':
                const movieRes = await getIdsByTag(tag, 'Movie');
                if (movieRes.status === 200) {
                    setReviewsIds(movieRes.data);
                }
                break;
            case '2':
                const seriesRes = await getIdsByTag(tag, 'Series');
                if (seriesRes.status === 200) {
                    setReviewsIds(seriesRes.data);
                }
                break;
            case '3':
                const bookRes = await getIdsByTag(tag, 'Book');
                if (bookRes.status === 200) {
                    setReviewsIds(bookRes.data);
                }
                break;
        }
    }, [tabValue, tag]);

    return (
        <div className={classes.list}>
            {reviewsIds.length === 0 ?
                <div className={classes.listEmpty}>
                    Нет рецензий
                </div>
                :
                reviewsIds.map((id) => {
                    return <ReviewSearchItem reviewId={id} tabValue={tabValue}/>
                })
            }
        </div>
    );
}

export default ReviewSearchList;