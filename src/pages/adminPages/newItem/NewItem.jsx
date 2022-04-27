import {MovieContext} from "../../../context/movieContext/MovieContext";
import {SeriesContext} from "../../../context/seriesContext/SeriesContext";
import {BookContext} from "../../../context/bookContext/BookContext";

import {createMovie} from "../../../context/movieContext/apiCalls";
import {createSeries} from "../../../context/seriesContext/apiCalls";
import {createBook} from "../../../context/bookContext/apiCalls";

import React, {useContext, useState} from "react";
import storage from "../../adminPage/firebase";
import useStyles from "./stylesNewItem";
import Topbar from "../../../components/topbar/Topbar";

import Button from "@material-ui/core/Button";
import Grid from "@mui/material/Grid";
import Sidebar from "../../../components/sidebarAdmin/SidebarAdmin";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {TextField} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {PhotoCamera} from "@material-ui/icons";
import {useLocation} from "react-router-dom";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff', ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Input = styled('input')({
    display: 'none',
});

export default function NewItem() {

    const {search} = useLocation();
    const type = new URLSearchParams(search).get('type');

    const classes = useStyles();
    const [item, setItem] = useState(null);
    const [img, setImg] = useState(null);
    const [imgSm, setImgSm] = useState(null);

    const {dispatch: dispatchMovie} = useContext(MovieContext);
    const {dispatch: dispatchSeries} = useContext(SeriesContext);
    const {dispatch: dispatchBook} = useContext(BookContext);

    const [uploaded, setUploaded] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        setItem({...item, [e.target.name]: value});
    };

    const upload = (items) => {
        items.forEach((item) => {
            const fileName = new Date().getTime() + item.label + item.file.name;
            const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                        setItem((prev) => {
                            return {...prev, [item.label]: url};
                        });
                        setUploaded((prev) => {
                            return prev + 1;
                        });
                    });
                }
            );
        });
    };

    const handleUpload = (e) => {
        try {
            e.preventDefault();
            upload([{file: img, label: "img"}, {file: imgSm, label: "imgSm"}]);
        } catch (e) {
            alert('You need to choose two images');
        }
    }

    const handleSubmit = async (e) => {
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
                res = await createMovie(item, dispatchMovie);
                break;
            case "series":
                if (typeof item.cast === "string") {
                    item.cast = item.cast.split(',').filter(Boolean).map((text) => text.trim());
                }
                res = await createSeries(item, dispatchSeries);
                break;
            case "book":
                res = await createBook(item, dispatchBook);
                break;
        }

        if (res.status === 400) {
            alert(res.data.message);
            return;
        }
        alert(res.statusText);
    };

    return (
        <>
            <Topbar/>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} tem xs={2}>
                    <Item><Sidebar/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.newProduct}>
                            {type === "movie" ? <h1>Новый фильм</h1> : type === "series" ? <h1>Новый сериал</h1> :
                                <h1>Новая книга</h1>}
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Grid container
                                      direction="column"
                                      justifyContent="space-between"
                                      alignItems="center"
                                      className={classes.wrapperInput}
                                >
                                    <Grid container
                                          direction="column"
                                          alignItems="center"
                                          justifyContent="center"
                                          className={classes.wrapperProduct}
                                    >

                                        <Grid className={classes.addProductItem}>
                                            <label htmlFor="icon-button-img">
                                                <span>Загрузить большое изображение</span>
                                                <Input accept="image/*" id="icon-button-img" type="file"
                                                       onChange={(e) => setImg(e.target.files[0])}/>
                                                <IconButton className={classes.imageIcon} aria-label="upload picture"
                                                            component="span">
                                                    <PhotoCamera/>
                                                </IconButton>
                                                {img === null ?
                                                    <span className={classes.imageName}>Файл не выбран</span>
                                                    : <span className={classes.imageName}>{img.name}</span>}
                                            </label>
                                        </Grid>

                                        <Grid className={classes.addProductItem}>
                                            <TextField
                                                helperText="Пожалуйста введите название"
                                                id="demo-helper-text-misaligned"
                                                label="Название"
                                                placeholder="Джон Уик"
                                                onChange={handleChange}
                                                type="text"
                                                name='title'
                                            />
                                        </Grid>
                                        {type === "movie" || type === "series" ?
                                            <>
                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите режиссера"
                                                        id="demo-helper-text-misaligned"
                                                        label="Режиссер"
                                                        placeholder="Кристофер Нолан"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='director'
                                                    />
                                                </Grid>

                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите длительность"
                                                        id="demo-helper-text-misaligned"
                                                        label="Длительность"
                                                        placeholder="3ч"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='duration'
                                                    />
                                                </Grid>
                                            </>

                                            :
                                            <>
                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите автора"
                                                        id="demo-helper-text-misaligned"
                                                        label="Автор"
                                                        placeholder="Стивен Кинг"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='author'
                                                    />
                                                </Grid>
                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите кол-во страниц"
                                                        id="demo-helper-text-misaligned"
                                                        label="Страницы"
                                                        placeholder="300"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='pages'
                                                    />
                                                </Grid>
                                            </>

                                        }

                                        <Grid className={classes.addProductItem}>
                                            <TextField
                                                helperText="Пожалуйста введите год выхода"
                                                id="demo-helper-text-misaligned"
                                                label="Год"
                                                placeholder="2000"
                                                onChange={handleChange}
                                                type="text"
                                                name='year'
                                            />

                                        </Grid>

                                    </Grid>
                                    <Grid container
                                          direction="column"
                                          alignItems="center"
                                          className={classes.wrapperProduct}>

                                        <Grid className={classes.addProductItem}>
                                            <label htmlFor="icon-button-sm-img">
                                                <span>Загрузить маленькое изображение</span>
                                                <Input accept="image/*" id="icon-button-sm-img" type="file"
                                                       onChange={(e) => setImgSm(e.target.files[0])}/>
                                                <IconButton className={classes.imageIcon} aria-label="upload picture"
                                                            component="span">
                                                    <PhotoCamera/>
                                                </IconButton>
                                                {imgSm === null ?
                                                    <span className={classes.imageName}>Файл не выбран</span>
                                                    : <span className={classes.imageName}>{imgSm.name}</span>}
                                            </label>
                                        </Grid>


                                        <Grid className={classes.addProductItem}>
                                            <TextField
                                                helperText="Пожалуйста введите жанр"
                                                id="demo-helper-text-misaligned"
                                                label="Жанр"
                                                placeholder="фэнтези"
                                                onChange={handleChange}
                                                type="text"
                                                name='genre'
                                            />
                                        </Grid>
                                        {type === "movie" || type === "series" ?
                                            <>
                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите лимит"
                                                        id="demo-helper-text-misaligned"
                                                        label="Лимит"
                                                        placeholder="16+"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='limit'
                                                    />
                                                </Grid>

                                                <Grid className={classes.addProductItem}>
                                                    <TextField
                                                        helperText="Пожалуйста введите актеров"
                                                        id="demo-helper-text-misaligned"
                                                        label="Актеры"
                                                        placeholder="Джонни Депп, Хелена Бонем-Картер"
                                                        onChange={handleChange}
                                                        type="text"
                                                        name='cast'
                                                    />
                                                </Grid>
                                            </>

                                            :

                                            <Grid className={classes.addProductItem}>
                                                <TextField
                                                    helperText="Пожалуйста введите язык"
                                                    id="demo-helper-text-misaligned"
                                                    label="Язык"
                                                    placeholder="Русский"
                                                    onChange={handleChange}
                                                    type="text"
                                                    name='language'
                                                />
                                            </Grid>

                                        }

                                        <Grid className={classes.addProductItem}>
                                            <TextField
                                                helperText="Пожалуйста введите аннотацию"
                                                id="demo-helper-text-misaligned"
                                                label="Аннотация"
                                                multiline
                                                maxRows={4}
                                                placeholder="Текст"
                                                onChange={handleChange}
                                                type="text"
                                                name='desc'
                                            />

                                        </Grid>


                                    </Grid>
                                </Grid>

                                <Grid>
                                    {uploaded === 2 ? (
                                        <Button className={classes.addProductButton}
                                                onClick={handleSubmit}>Создать</Button>

                                    ) : (
                                        <Button className={classes.addProductButton}
                                                onClick={handleUpload}>Загрузить</Button>
                                    )}
                                </Grid>

                            </Grid>

                        </div>

                    </Item>
                </Grid>
            </Grid>


        </>

    );
}
