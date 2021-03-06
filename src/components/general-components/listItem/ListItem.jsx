import {Star, ThumbUpAltOutlined} from "@mui/icons-material";
import * as React from "react";
import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import useStyles from "../listItem/stylesListItem";
import ReviewModal from "../reviewModal/ReviewModal";
import Button from "@mui/material/Button";
import {getReviewById} from "../../../context/reviewContext/apiCalls";
import {getMovie, getUserMovieRating} from "../../../context/movieContext/apiCalls";
import {getOneSeries, getUserSeriesRating} from "../../../context/seriesContext/apiCalls";
import {getBook, getUserBookRating} from "../../../context/bookContext/apiCalls";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";


function ListItem({type, reviewId}) {
    const [isHovered, setIsHovered] = useState(false);
    const [review, setReview] = useState({});

    const [item, setItem] = useState({});

    const [rating, setRating] = useState(0);
    const [loading, setLoading] = useState(true);

    const classes = useStyles();

    useEffect(async () => {
        setLoading(true);
        const reviewData = await getReviewById(reviewId);
        if (reviewData.status === 200) {
            setReview(reviewData.data);
        }
        switch (type) {
            case 'movie':
                const movieData = await getMovie(reviewData.data.itemId);
                if (movieData.status === 200) {
                    setItem(movieData.data);
                }
                const movieRatingRes = await getUserMovieRating(reviewData.data.itemId, reviewData.data.authorId);
                if (movieRatingRes.status === 200) {
                    setRating(movieRatingRes.data.rate);
                }
                break;
            case 'series':
                const seriesData = await getOneSeries(reviewData.data.itemId);
                if (seriesData.status === 200) {
                    setItem(seriesData.data);
                }
                const seriesRatingRes = await getUserSeriesRating(reviewData.data.itemId, reviewData.data.authorId);
                if (seriesRatingRes.status === 200) {
                    setRating(seriesRatingRes.data.rate);
                }
                break;
            case 'book':
                const bookData = await getBook(reviewData.data.itemId);
                if (bookData.status === 200) {
                    setItem(bookData.data);
                }
                const bookRatingRes = await getUserBookRating(reviewData.data.itemId, reviewData.data.authorId);
                if (bookRatingRes.status === 200) {
                    setRating(bookRatingRes.data.rate);
                }
                break;
        }
        setLoading(false);
    }, [reviewId]);

    return (
        <>
            {loading ?
                <Box sx={{display: 'flex'}}>
                    <CircularProgress className={classes.load}/>
                </Box>
                :
                <div className={classes.listItem}
                     onMouseEnter={(e) => {
                         e.preventDefault();
                         setIsHovered(true)
                     }}
                     onMouseLeave={(e) => {
                         e.preventDefault();
                         setIsHovered(false)
                     }}>
                    {isHovered === false &&
                    <img className={classes.img} src={item.imgSm} alt=""/>
                    }

                    {isHovered && (
                        <div className={classes.itemInfo}>
                            <div className={classes.icons}>
                                <div>
                                    <span className={classes.rating}>{rating}</span>
                                    <Star className={classes.icon}/>
                                </div>
                                <div>
                                    <span className={classes.rating}>{review.likes}</span>
                                    <ThumbUpAltOutlined className={classes.icon}/>
                                </div>

                            </div>
                            <div className={classes.itemInfoTop}>
                                <div className={classes.itemName}>{item.title}</div>
                                <div className={classes.itemQuote}><q>{review.textReview}</q></div>
                                <span className={classes.itemAuthor}>{review.author}</span>
                                <div className={classes.buttonContainer}>
                                    <ReviewModal review={review} setReview={setReview} setIsHovered={setIsHovered}/>
                                    <Link className="link"
                                          to={{pathname: '/itemPage', search: `?type=${type}&id=${item.id}`}}>
                                        {type === 'movie' ?
                                            <Button size="small" className={classes.button} variant="contained">??????????????
                                                ??
                                                ????????????</Button>
                                            : type === 'series' ?
                                                <Button size="small" className={classes.button} variant="contained">??????????????
                                                    ??
                                                    ??????????????</Button>
                                                :
                                                <Button size="small" className={classes.button} variant="contained">??????????????
                                                    ??
                                                    ??????????</Button>
                                        }
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            }
        </>
    );
}

export default ListItem;