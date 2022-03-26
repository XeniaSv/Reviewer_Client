import './stylesItemPage'
import {Star} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import {Grid} from "@mui/material";
import React, {useEffect, useState} from "react";
import useStyles from "../itemPage/stylesItemPage";
import ReviewList from "../../components/reviewList/ReviewList";
import Rating from '@mui/material/Rating';
import AddReview from "../../components/addReview/AddReview";

import {getMovie, getMovieRating, getUserMovieRating, putMovieRating} from "../../context/movieContext/apiCalls";
import {getBook, getBookRating, getUserBookRating, putBookRating} from "../../context/bookContext/apiCalls";
import {
    getOneSeries,
    getSeriesRating,
    getUserSeriesRating,
    putSeriesRating
} from "../../context/seriesContext/apiCalls";

function ItemPage() {
    const {search} = useLocation();

    const type = new URLSearchParams(search).get('type');
    const itemId = new URLSearchParams(search).get('id');

    const [item, setItem] = useState({});
    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(0);

    useEffect(async () => {
        await fillItem();
        await fillRating();
        await fillUserRating();
    }, [type, itemId, userRating]);

    const fillItem = async () => {
        switch (type) {
            case "movie":
                const movieRes = await getMovie(itemId);
                if (movieRes.status === 200) {
                    setItem(movieRes.data);
                    return;
                }
                alert(movieRes.statusText);
                break;
            case "series":
                const seriesRes = await getOneSeries(itemId);
                if (seriesRes.status === 200) {
                    setItem(seriesRes.data);
                    return;
                }
                alert(seriesRes.statusText);
                break;
            case "book":
                const bookRes = await getBook(itemId);
                if (bookRes.status === 200) {
                    setItem(bookRes.data);
                    return;
                }
                alert(bookRes.statusText);
                break;
            default:
                alert('This type does not exist');
                break;
        }
    };

    const fillRating = async () => {
        switch (type) {
            case "movie":
                const movieRatingRes = await getMovieRating(itemId);
                if (movieRatingRes.status === 200) {
                    setRating(movieRatingRes.data.rate);
                    return;
                }
                alert(movieRatingRes.statusText);
                break;
            case "series":
                const seriesRatingRes = await getSeriesRating(itemId);
                if (seriesRatingRes.status === 200) {
                    setRating(seriesRatingRes.data.rate);
                    return
                }
                alert(seriesRatingRes.statusText);
                break;
            case "book":
                const bookRatingRes = await getBookRating(itemId);
                if (bookRatingRes.status === 200) {
                    setRating(bookRatingRes.data.rate);
                    return;
                }
                alert(bookRatingRes.statusText);
                break;
            default:
                alert('This type does not exist');
                break;
        }
    };

    const fillUserRating = async () => {
        switch (type) {
            case "movie":
                const movieUserRatingRes = await getUserMovieRating(itemId);
                if (movieUserRatingRes.status === 200) {
                    setUserRating(movieUserRatingRes.data.rate);
                    return
                }
                break;
            case "series":
                const seriesUserRatingRes = await getUserSeriesRating(itemId);
                if (seriesUserRatingRes.status === 200) {
                    setUserRating(seriesUserRatingRes.data.rate);
                    return
                }
                break;
            case "book":
                const bookUserRatingRes = await getUserBookRating(itemId);
                if (bookUserRatingRes.status === 200) {
                    setUserRating(bookUserRatingRes.data.rate);
                    return
                }
                break;
            default:
                alert('This type does not exist');
                break;
        }
    };

    const handleUserRating = async (e, value) => {
        switch (type) {
            case "movie":
                const movieUserRatingRes = await putMovieRating(itemId, value);
                if (movieUserRatingRes.status === 201) {
                    setUserRating(movieUserRatingRes.data.rate);
                    return
                }
                break;
            case "series":
                const seriesUserRatingRes = await putSeriesRating(itemId, value);
                if (seriesUserRatingRes.status === 201) {
                    setUserRating(seriesUserRatingRes.data.rate);
                    return
                }
                break;
            case "book":
                const bookUserRatingRes = await putBookRating(itemId, value);
                if (bookUserRatingRes.status === 201) {
                    setUserRating(bookUserRatingRes.data.rate);
                    return
                }
                break;
            default:
                alert('This type does not exist');
                break;
        }
    }

    const classes = useStyles();
    return (
        <div className={classes.itemPage}>
            <Navbar/>
            <Grid container direction='column' className={classes.container}>
                <Grid className={classes.item}>
                    <img
                        className={classes.image}
                        src={item.img}
                    />

                </Grid>

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    className={classes.info}>

                    <Grid container direction="row"
                          justifyContent="flex-start"
                          alignItems="center">
                        <Grid>
                            <div className={classes.ratingInfo}>
                                <span className={classes.rating}>{rating}</span>
                                <Star fontSize="large" className={classes.icon}/>
                            </div>
                        </Grid>
                        <Grid>
                            <Rating className={classes.ratingStar} value={userRating}
                                    onChange={handleUserRating}
                                    name="size-large" defaultValue={0} size="large"/>
                        </Grid>
                    </Grid>

                    <Grid xs={5} container className={classes.infoItem}>
                        {type === 'book' ?
                            <>
                                <Grid>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>TITLE</h3>
                                        <span>{item.title}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>AUTHOR</h3>
                                        <span>{item.author}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>THE YEAR OF PUBLISHING</h3>
                                        <span>{item.year}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>NUMBER OF PAGES</h3>
                                        <span>{item.pages}</span>
                                    </div>
                                </Grid>

                                <Grid>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>LANGUAGE</h3>
                                        <span>{item.language}</span>
                                    </div>

                                    <div>
                                        <h3 className={classes.infoTitle}>GENRE</h3>
                                        <span>{item.genre !== undefined ? item.genre.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>DESCRIPTION</h3>
                                        <span>{item.desc}</span>
                                    </div>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>TITLE</h3>
                                        <span>{item.title}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>DIRECTOR</h3>
                                        <span>{item.director}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>YEAR</h3>
                                        <span>{item.year}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>DURATION</h3>
                                        <span>{item.duration}</span>
                                    </div>
                                </Grid>

                                <Grid>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>LIMIT</h3>
                                        <span>{item.limit}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>MAIN ACTORS</h3>
                                        <span>{item.cast !== undefined ? item.cast.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>GENRE</h3>
                                        <span>{item.genre !== undefined ? item.genre.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>DESCRIPTION</h3>
                                        <span>{item.desc}</span>
                                    </div>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <ReviewList itemId={itemId}/>
            <AddReview itemId={itemId} type={type}/>
        </div>
    )
}

export default ItemPage;