import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
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

export default function AddReview({itemId, type, setUpdateListReview}) {
    const reviewTags = type === 'book' ? bookTags : tags;
    const classes = useStyles();
    const {user} = useContext(AuthContext);

    const [review, setReview] = useState({});

    const [open, setOpen] = useState(false);
    const ref0 = useRef();

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        if (value !== "")
            setReview({...review, [e.target.name]: value});
        else {
            delete review[e.target.name];
            setReview({...review});
        }
    };

    const handleTagsChanged = (e, values) => {
        if (values.length !== 0)
            setReview({...review, [ref0.current.getAttribute('name')]: values.map((value) => value.title)});
        else {
            delete review[ref0.current.getAttribute('name')];
            setReview({...review});
        }
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

    useEffect(() => {
        setReview({
            author: user ? user.user.id : null,
            item: itemId,
            onItem: type.charAt(0).toUpperCase() + type.slice(1)
        });
    }, [itemId, type])

    return (
        <div>
            <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
                <Button disabled={!user} className={classes.buttonOpen} variant="outlined" onClick={handleOpen}
                        startIcon={<AddIcon/>}>
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
                                        placeholder="ужасы, комедия..."

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