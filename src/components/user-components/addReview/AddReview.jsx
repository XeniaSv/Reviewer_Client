import * as React from 'react';
import {useContext, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useStyles from "../addReview/stylesAddReview";
import AddIcon from "@mui/icons-material/Add";
import {Grid, TextField} from "@mui/material";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {bookTags, tags} from "../../../tags";
import {publishReview} from "../../../context/reviewContext/apiCalls";
import {AuthContext} from "../../../context/authContext/AuthContext";
// import Rating from "@mui/material/Rating";

export default function AddReview({itemId, type, updateListReview, setUpdateListReview}) {
    const reviewTags = type === 'book' ? bookTags: tags;
    const classes = useStyles();
    const {user} = useContext(AuthContext);

    const [review, setReview] = useState({
        author: user ? user.user.id : null,
        item: itemId,
        onItem: type.charAt(0).toUpperCase() + type.slice(1)
    });

    const [open, setOpen] = React.useState(false);
    const ref0 = useRef();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setReview({
            author: JSON.parse(localStorage.getItem('user')).user.id,
            item: itemId,
            onItem: type.charAt(0).toUpperCase() + type.slice(1)
        });
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setReview({...review, [e.target.name]: value});
    };

    const handleTagsChanged = (e, values) => {
        setReview({...review, [ref0.current.getAttribute('name')]: values.map((value) => value.title)});
    };

    const handlePublish = async () => {
        const res = await publishReview(review);
        if (res.status === 201) {
            handleClose();
            setUpdateListReview(true);
            return;
        }
        alert(res.data.message);
        handleClose();
    };

    return (
        <div>
            <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
                <Button disabled={!user} className={classes.buttonOpen} variant="outlined" onClick={handleOpen} startIcon={<AddIcon/>}>
                    ДОБАВИТЬ РЕЦЕНЗИЮ
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <Box className={classes.modal}>
                    <Grid container
                          className={classes.container}>

                        <Grid>
                            <TextField
                                id="outlined-multiline-static"
                                label="Заголовок рецензии"
                                multiline
                                rows={1}
                                onChange={handleChange}
                                name="title"
                                className={classes.title}/>
                        </Grid>

                        <Grid>
                            <Autocomplete
                                multiple
                                ref={ref0}
                                id="tags-standard"
                                options={reviewTags}
                                name="tags"
                                onChange={handleTagsChanged}
                                className={classes.tags}
                                getOptionLabel={option => option.title}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        fullWidth={true}
                                        variant="standard"
                                        label="Тэги"
                                        placeholder="horror, comedy..."

                                    />
                                )}
                            />
                        </Grid>

                        <Grid>
                            <TextField
                                multiline
                                rows={10}
                                variant="outlined"
                                onChange={handleChange}
                                placeholder="Текст рецензии...."
                                name="textReview"
                                className={classes.text}/>
                        </Grid>

                        {/*<Grid className={classes.rating}>*/}
                        {/*    <Rating className={classes.ratingStar} name="size-large" defaultValue={0} size="large"/>*/}
                        {/*</Grid>*/}

                        <Grid>
                            <Button disabled={Object.keys(review).length !== 6} className={classes.button}
                                    variant="contained"
                                    onClick={handlePublish}>
                                ОПУБЛИКОВАТЬ
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}