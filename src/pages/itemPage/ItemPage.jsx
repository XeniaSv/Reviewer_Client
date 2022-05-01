import './stylesItemPage'
import {Star} from "@mui/icons-material";
import {useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import {Grid} from "@mui/material";
import React, {useContext, useEffect, useState} from "react";
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
import {AuthContext} from "../../context/authContext/AuthContext";

function ItemPage() {
    const {search} = useLocation();
    const {user} = useContext(AuthContext);

    const type = new URLSearchParams(search).get('type');
    const itemId = new URLSearchParams(search).get('id');

    const [item, setItem] = useState({});
    const [rating, setRating] = useState(0);
    const [userRating, setUserRating] = useState(0);

    const [updateListReview, setUpdateListReview] = useState(false);

    useEffect(async () => {
        await fillItem();
        await fillRating();
        if (user)
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
                const movieUserRatingRes = await getUserMovieRating(itemId, user.user.id);
                if (movieUserRatingRes.status === 200) {
                    setUserRating(movieUserRatingRes.data.rate);
                    return
                }
                break;
            case "series":
                const seriesUserRatingRes = await getUserSeriesRating(itemId, user.user.id);
                if (seriesUserRatingRes.status === 200) {
                    setUserRating(seriesUserRatingRes.data.rate);
                    return
                }
                break;
            case "book":
                const bookUserRatingRes = await getUserBookRating(itemId, user.user.id);
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
                const movieUserRatingRes = await putMovieRating(itemId, value, user.user.id);
                if (movieUserRatingRes.status === 201) {
                    setUserRating(movieUserRatingRes.data.rate);
                    return
                }
                break;
            case "series":
                const seriesUserRatingRes = await putSeriesRating(itemId, value, user.user.id);
                if (seriesUserRatingRes.status === 201) {
                    setUserRating(seriesUserRatingRes.data.rate);
                    return
                }
                break;
            case "book":
                const bookUserRatingRes = await putBookRating(itemId, value, user.user.id);
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
            <Grid container direction='row' className={classes.mainContainer}>
                <Grid className={classes.item}>
                    <img
                        className={classes.image}
                        src={item.img}
                    />
                </Grid>

                <Grid
                    container
                    className={classes.infoContainer}>

                    <Grid container
                          className={classes.ratingContainer}
                    >
                        <Grid>
                            <div className={classes.ratingInfo}>
                                <span className={classes.rating}>{rating}</span>
                                <Star fontSize="large" className={classes.icon}/>
                            </div>
                        </Grid>
                        <Grid>
                            <Rating disabled={!user} className={classes.ratingStar} value={userRating}
                                    onChange={handleUserRating}
                                    name="size-large" defaultValue={0} size="large"/>
                        </Grid>
                    </Grid>

                    <Grid xs={5} container direction="row" className={classes.infoItemContainer}>
                        {type === 'book' ?
                            <>
                                <Grid xs={6} className={classes.infoItem}>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>НАЗВАНИЕ</h3>
                                        <span>{item.title}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>АВТОР</h3>
                                        <span>{item.author}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>ГОД ПУБЛИКАЦИИ</h3>
                                        <span>{item.year}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>КОЛ-ВО СТРАНИЦ</h3>
                                        <span>{item.pages}</span>
                                    </div>
                                </Grid>

                                <Grid xs={6}>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>ЯЗЫК</h3>
                                        <span>{item.language}</span>
                                    </div>

                                    <div>
                                        <h3 className={classes.infoTitle}>ЖАНР</h3>
                                        <span>{item.genre !== undefined ? item.genre.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>АННОТАЦИЯ</h3>
                                        <span>{item.desc}</span>
                                    </div>
                                </Grid>
                            </>
                            :
                            <>
                                <Grid className={classes.infoItem}>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>НАЗВАНИЕ</h3>
                                        <span>{item.title}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>РЕЖИССЕР</h3>
                                        <span>{item.director}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>ГОД</h3>
                                        <span>{item.year}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>ДЛИТЕЛЬНОСТЬ</h3>
                                        <span>{item.duration}</span>
                                    </div>
                                </Grid>

                                <Grid className={classes.infoItem}>
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>ЛИМИТ</h3>
                                        <span>{item.limit}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>ГЛАВНЫЕ АКТЕРЫ</h3>
                                        <span>{item.cast !== undefined ? item.cast.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>ЖАНР</h3>
                                        <span>{item.genre !== undefined ? item.genre.join(", ") : ""}</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>АННОТАЦИЯ</h3>
                                        <span>{item.desc}</span>
                                    </div>
                                </Grid>
                            </>
                        }
                    </Grid>
                </Grid>
            </Grid>
            <ReviewList itemId={itemId} updateListReview={updateListReview} setUpdateListReview={setUpdateListReview}/>
            <AddReview itemId={itemId} type={type} updateListReview={updateListReview}
                       setUpdateListReview={setUpdateListReview}/>
        </div>
    )
}

export default ItemPage;