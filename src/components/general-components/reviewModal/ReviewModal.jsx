import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "../reviewModal/stylesReviewModal";
import Avatar from "@mui/material/Avatar";
import {ThumbUpAltOutlined} from "@mui/icons-material";
import {Grid} from "@mui/material";
import {putLike} from "../../../context/reviewContext/apiCalls";
import {useContext} from "react";
import {AuthContext} from "../../../context/authContext/AuthContext";


export default function ReviewModal({review, setReview, setIsHovered}) {
    const classes = useStyles();
    const {user} = useContext(AuthContext);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        if (setIsHovered !== undefined)
            setIsHovered(false);
    };

    const handleLike = async () => {
        const reviewData = await putLike(review.id);
        if (reviewData.status === 201) {
            setReview(reviewData.data);
        }
    };

    return (
        <div>
            <Button
                className={classes.buttonOpen}
                size="small"
                variant="contained"
                onClick={handleOpen}>
                Рецензия
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box className={classes.modal}>
                    <Typography
                        className={classes.title}
                        id="modal-modal-title"
                        variant="h5"
                        component="h2">
                        {review.title}
                    </Typography>

                    <Avatar
                        className={classes.avatar}
                        alt="Remy Sharp"
                        src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"/>

                    <Typography
                        className={classes.info}
                        id="modal-modal-description"
                        variant="h6"
                        sx={{mt: 2}}>
                        {review.author}
                    </Typography>
                    <Typography className={classes.info} id="modal-modal-description">
                        {review.createdAt}
                    </Typography>
                    <Button disabled={!user} className={classes.button} onClick={handleLike} variant="contained" size="small">
                        <span className={classes.reviewRating}>{review.likes}</span>
                        <ThumbUpAltOutlined className={classes.reviewIcon}/>
                    </Button>

                    <Grid container
                          direction="row"
                          justifyContent="center"
                          alignItems="center">

                        {review.tags?.map((tag) => (
                            <Grid>
                                <div className={classes.tag}>
                                    <span>{`#${tag}`}</span>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                    <Typography className={classes.text} variant="body2" gutterBottom>
                        {review.textReview}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}