import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import useStyles from "../addReview/stylesAddReview";
import AddIcon from "@mui/icons-material/Add";
import {Grid, TextField} from "@mui/material";
import Rating from "@mui/material/Rating";

export default function AddReview() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Box sx={{transform: 'translateZ(0px)', flexGrow: 1}}>
                <Button className={classes.buttonOpen} variant="outlined" onClick={handleOpen} startIcon={<AddIcon/>}>
                    Add review
                </Button>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.modal}>
                    <Grid container
                          direction="column"
                          justifyContent="space-around"
                          alignItems="center"
                          className={classes.container}
                    >
                        <Grid>
                            <TextField
                                id="outlined-multiline-static"
                                label="Review title"
                                multiline
                                rows={1}
                                className={classes.title}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                id="outlined-multiline-static"
                                label="Review tags"
                                placeholder="#movie #fantasy..."
                                multiline
                                rows={1}
                                size="small"
                                className={classes.tags}
                            />
                        </Grid>
                        <Grid>
                            <TextField
                                multiline
                                rows={10}
                                variant="outlined"
                                placeholder="Review text...."
                                className={classes.text}
                            />
                        </Grid>
                        <Grid className={classes.rating}>
                            <Rating className={classes.ratingStar} name="size-large" defaultValue={0} size="large"/>
                        </Grid>
                        <Grid>
                            <Button className={classes.button} variant="contained">PUBLISH REVIEW</Button>
                        </Grid>
                    </Grid>


                </Box>
            </Modal>
        </div>
    );
}