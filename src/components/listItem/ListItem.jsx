import './stylesListItem';
import {Star, ThumbUpAltOutlined} from "@mui/icons-material";
import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import useStyles from "../listItem/stylesListItem";
import ReviewModal from "../reviewModal/ReviewModal";
import Button from "@mui/material/Button";


function ListItem({type, index, item}) {
    const [isHovered, setIsHovered] = useState(false);
    const [movie, setMovie] = useState({});

    const classes = useStyles();

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get('/movies/find/' + item, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('user')).accessToken}`
                    },
                });
                setMovie(res.data);
            } catch (e) {
                console.log(e);
            }
        };
        getMovie();
    }, [item]);

    return (

        <div className={classes.listItem}
             style={{left: isHovered && index * 225 - 50 + index * 2.5}}
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}>
            <img className={classes.img} src={movie.imgSm} alt=""/>

            {isHovered && (
                <>
                    <div className={classes.itemInfo}>
                        <div className={classes.icons}>
                            <div>
                                <span className={classes.rating}>124</span>
                                <Star className={classes.icon}/>
                            </div>
                            <div>
                                <span className={classes.rating}>124</span>
                                <ThumbUpAltOutlined className={classes.icon}/>
                            </div>

                        </div>
                        <div className={classes.itemInfoTop}>
                            <div className={classes.itemName}>НАЗВАНИЕ ФИЛЬМА</div>
                            <div className={classes.itemQuote}><q>какая-то там очень умная цитата, которая побуждает
                                читателя кликнуть и еще много чего прикольного</q></div>
                            <span className={classes.itemAuthor}>Автор</span>
                            <div className={classes.buttonContainer}>
                                <ReviewModal/>
                                <Link className="link" to={{pathname: '/itemPage', search: `?type=${type}`}}>
                                    {type === 'movie' ?
                                        <Button size="small" className={classes.button} variant="contained">Open
                                            movie</Button>
                                        : type === 'series' ?
                                            <Button size="small" className={classes.button} variant="contained">Open
                                                series</Button>
                                            :
                                            <Button size="small" className={classes.button} variant="contained">Open
                                                book</Button>
                                    }

                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ListItem;