import './stylesItemPage'
import {ArrowBackOutlined, Star, ThumbDownOutlined, ThumbUpAltOutlined} from "@mui/icons-material";
import {Link, useLocation} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import {Box, Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import useStyles from "../itemPage/stylesItemPage";
import ReviewList from "../../components/reviewList/ReviewList";
import Rating from '@mui/material/Rating';
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import AddReview from "../../components/addReview/AddReview";

function ItemPage() {
    const location = useLocation();
    console.log(location);

    const {search} = useLocation();

    const type = new URLSearchParams(search).get('type');
    const itemId = new URLSearchParams(search).get('id');
    console.log(type);
    console.log(itemId);

    const classes = useStyles();
    return (
        <div className={classes.itemPage}>
            <Navbar/>
            <Grid   container direction='column' className={classes.container}>
                <Grid className={classes.item} >
                        <img
                            className={classes.image}
                            src="https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/eed1de3a-5400-43b3-839e-22490389bf54/300x450"
                        />

                </Grid>

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    className={classes.info}

                >
                    <Grid container direction="row"
                          justifyContent="flex-start"
                          alignItems="center">
                        <Grid >
                            <div className={classes.ratingInfo}>
                                <span className={classes.rating}>124</span>
                                <Star fontSize="large" className={classes.icon}/>
                            </div>
                        </Grid>
                        <Grid >
                            <Rating className={classes.ratingStar} name="size-large" defaultValue={0} size="large"/>
                        </Grid>


                    </Grid>
                    <Grid xs={5} container className={classes.infoItem}>
                        {type === 'book' ?
                            <>
                                <Grid >
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>TITLE</h3>
                                        <span>Movie title</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>AUTHOR</h3>
                                        <span>Movie director</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>THE YEAR OF PUBLISHING</h3>
                                        <span>Movie year</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>NUMBER OF PAGES</h3>
                                        <span>Movie duration</span>
                                    </div>

                                </Grid>
                                <Grid >
                                    <div>
                                        <h3 className={classes.infoTitle} style={{marginTop: '0'}}>LANGUAGE</h3>
                                        <span>Movie limit</span>
                                    </div>

                                    <div>
                                        <h3 className={classes.infoTitle}>GENRE</h3>
                                        <span>Movie genre</span>
                                    </div>
                                    <div>
                                        <h3 className={classes.infoTitle}>DESCRIPTION</h3>
                                        <span>Movie description</span>
                                    </div>
                                </Grid>
                            </>


                            :
                            <>
                            <Grid >
                                <div>
                                    <h3 className={classes.infoTitle} style={{marginTop: '0'}}>TITLE</h3>
                                    <span>Movie title</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>DIRECTOR</h3>
                                    <span>Movie director</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>YEAR</h3>
                                    <span>Movie year</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>DURATION</h3>
                                    <span>Movie duration</span>
                                </div>

                            </Grid>
                            <Grid >
                                <div>
                                    <h3 className={classes.infoTitle} style={{marginTop: '0'}}>LIMIT</h3>
                                    <span>Movie limit</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>MAIN ACTORS</h3>
                                    <span>Movie main actors</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>GENRE</h3>
                                    <span>Movie genre</span>
                                </div>
                                <div>
                                    <h3 className={classes.infoTitle}>DESCRIPTION</h3>
                                    <span>Movie description</span>
                                </div>
                            </Grid>

                            </>


                        }
                    </Grid>
                </Grid>
            </Grid>
            <ReviewList/>
            <AddReview/>
        </div>
    );
}

export default ItemPage;