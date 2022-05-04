import React, {useEffect, useState} from 'react';
import Topbar from "../../../components/general-components/topbar/Topbar";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/admin-components/sidebarAdmin/SidebarAdmin";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useStyles from './stylesUpdateItem';
import TextField from "@mui/material/TextField";
import Button from "@material-ui/core/Button";
import {useLocation} from "react-router-dom";
import {getMovie, updateMovie} from "../../../context/movieContext/apiCalls";
import {getOneSeries, updateSeries} from "../../../context/seriesContext/apiCalls";
import {getBook, updateBook} from "../../../context/bookContext/apiCalls";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function UpdateItem() {
    const classes = useStyles();
    const {search} = useLocation();
    const type = new URLSearchParams(search).get('type');
    const itemId = new URLSearchParams(search).get('id');

    const [item, setItem] = useState({});


    useEffect(async () => {
        switch (type) {
            case 'movie':
                const resMovie = await getMovie(itemId);
                if (resMovie.status === 200) {
                    setItem(resMovie.data);
                }
                break;
            case 'series':
                const resSeries = await getOneSeries(itemId);
                if (resSeries.status === 200) {
                    setItem(resSeries.data);
                }
                break;
            case 'book':
                const resBook = await getBook(itemId);
                if (resBook.status === 200) {
                    setItem(resBook.data);
                }
                break;
        }
    }, [itemId, type]);

    const handleChange = (e) => {
        const value = e.target.value;
        setItem({...item, [e.target.name]: value});
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (typeof item.genre === "string") {
            item.genre = item.genre.split(',').filter(Boolean).map((text) => text.trim());
        }

        let res;
        switch (type) {
            case "movie":
                if (typeof item.cast === "string") {
                    item.cast = item.cast.split(',').filter(Boolean).map((text) => text.trim());
                }
                res = await updateMovie(item);
                break;
            case "series":
                if (typeof item.cast === "string") {
                    item.cast = item.cast.split(',').filter(Boolean).map((text) => text.trim());
                }
                res = await updateSeries(item);
                break;
            case "book":
                res = await updateBook(item);
                break;
        }

        if (res.status === 400) {
            alert(res.data.message);
            return;
        }
        alert('Item has been updated');
    }

    return (
        <>
            <Topbar/>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><Sidebar/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.newProduct}>
                            {type === "movie" ? <h1>Изменить фильм</h1> : type === "series" ? <h1>Изменить сериал</h1> :
                                <h1>Изменить книгу</h1>}

                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    className={classes.wrapperInput}
                                >
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        className={classes.wrapperProduct}
                                    >

                                        <Grid
                                            className={classes.updateProductItem}>
                                            <TextField
                                                id="outlined-required"
                                                label="Название"
                                                value={item.title || ''}
                                                name='title'
                                                type="text"
                                                onChange={handleChange}
                                            />

                                        </Grid>
                                        {type === "movie" || type === "series" ?
                                            <>
                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined"
                                                        label="Режиссер"
                                                        value={item.director || ''}
                                                        name='director'
                                                        type="text"
                                                        onChange={handleChange}
                                                    />
                                                </Grid>

                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Длительность"
                                                        value={item.duration || ''}
                                                        type="text"
                                                        name='duration'
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </>

                                            :
                                            <>
                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Автор"
                                                        value={item.author || ''}
                                                        type="text"
                                                        name='author'
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Страницы"
                                                        value={item.pages || ''}
                                                        type="text"
                                                        name='pages'
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </>

                                        }

                                        <Grid className={classes.updateProductItem}>
                                            <TextField
                                                id="outlined-required"
                                                label="Год"
                                                value={item.year || ''}
                                                type="text"
                                                name='year'
                                                onChange={handleChange}
                                            />
                                        </Grid>

                                    </Grid>
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        className={classes.wrapperProduct}
                                    >

                                        <Grid className={classes.updateProductItem}>
                                            <TextField
                                                id="outlined-required"
                                                label="Жанр"
                                                value={item.genre || ''}
                                                type="text"
                                                name='genre'
                                                onChange={handleChange}
                                            />
                                        </Grid>
                                        {type === "movie" || type === "series" ?
                                            <>
                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Лимит"
                                                        value={item.limit || ''}
                                                        type="text"
                                                        name='limit'
                                                        onChange={handleChange}
                                                    />
                                                </Grid>

                                                <Grid className={classes.updateProductItem}>
                                                    <TextField
                                                        id="outlined-required"
                                                        label="Актеры"
                                                        value={item.cast || ''}
                                                        type="text"
                                                        name='cast'
                                                        onChange={handleChange}
                                                    />
                                                </Grid>
                                            </>

                                            :

                                            <Grid className={classes.updateProductItem}>
                                                <TextField
                                                    id="outlined-required"
                                                    label="Язык"
                                                    value={item.language || ''}
                                                    type="text"
                                                    name='language'
                                                    onChange={handleChange}
                                                />
                                            </Grid>

                                        }

                                        <Grid className={classes.updateProductItem}>
                                            <TextField
                                                id="outlined-required"
                                                label="Аннотация"
                                                value={item.desc || ''}
                                                type="text"
                                                name='desc'
                                                onChange={handleChange}
                                                multiline
                                                maxRows={4}
                                            />
                                        </Grid>

                                    </Grid>
                                </Grid>

                                <Grid>
                                    <Button className={classes.updateProductButton}
                                            onClick={handleUpdate}>Изменить</Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default UpdateItem;