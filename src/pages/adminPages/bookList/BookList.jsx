import React, {useContext, useEffect} from 'react';
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {BookContext} from "../../../context/bookContext/BookContext";
import {deleteBook, getBooks} from "../../../context/bookContext/apiCalls";
import Button from "@material-ui/core/Button";
import useStyles from './stylesBookList';
import Topbar from "../../../components/topbar/Topbar";
import Sidebar from "../../../components/sidebarAdmin/SidebarAdmin";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BookList() {
    const classes = useStyles();
    const {books, dispatch} = useContext(BookContext);

    useEffect(() => {
        getBooks(dispatch);
    }, [dispatch])

    const handleDelete = (id) => {
        deleteBook(id, dispatch);
    };


    const columns = [
        {field: "id", headerName: "ID", width: 90},
        {
            field: "title",
            headerName: "Title",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className={classes.productListItem}>
                        <img className={classes.productListImg} src={params.row.imgSm} alt=""/>
                        {params.row.title}
                    </div>
                );
            },
        },
        {field: "author", headerName: "Author", width: 120},
        {field: "year", headerName: "Year", width: 120},
        {field: "pages", headerName: "Pages", width: 120},
        {field: "genre", headerName: "Genre", width: 120},
        {field: "language", headerName: "Language", width: 120},
        {field: "desc", headerName: "Description", width: 200},

        // {
        //     field: "action",
        //     headerName: "Action",
        //     width: 150,
        //     renderCell: (params) => {
        //
        //         return (
        //             <>
        //                 <Link to={{pathname: "/movie/" + params.row._id, movie:params.row}}>
        //                     <button className={classes.productListEdit}>Edit</button>
        //                 </Link>
        //                 <DeleteOutline
        //                     className={classes.productListDelete}
        //                     onClick={() => handleDelete(params.row._id)}
        //                 />
        //             </>
        //         );
        //     },
        // },
    ];

    return (
        <>
            <Topbar/>
            <Link to={{pathname: '/adminNewItem', search: '?type=book'}} className='link'>
                <Button className={classes.button} variant="outlined">ADD NEW BOOK</Button>
            </Link>
            <Grid className={classes.wrapper} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><Sidebar/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.productList}>

                            <DataGrid
                                rows={books}
                                disableSelectionOnClick
                                columns={columns}
                                pageSize={8}
                                checkboxSelection
                                getRowId={(r) => r.id}
                                className={classes.table}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>

    );
}