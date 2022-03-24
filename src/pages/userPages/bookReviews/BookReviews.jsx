import React from 'react';
import Navbar from "../../../components/navbar/Navbar";
import SidebarUser from "../../../components/sidebarUser/SidebarUser";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';
import {Link} from "react-router-dom";
import {DeleteOutline} from "@material-ui/icons";
import useStyles from "./stylesBookReviews";


const rows = [
    {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35},
    {id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42},
    {id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45},
    {id: 4, lastName: 'Stark', firstName: 'Arya', age: 16},
    {id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null},
    {id: 6, lastName: 'Melisandre', firstName: null, age: 150},
    {id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44},
    {id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36},
    {id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65},
];

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function BookReviews(props) {
    const classes = useStyles();

    const columns = [

        {field: 'id', headerName: 'ID', width: 70},
        {field: 'title', headerName: 'Title', width: 130},
        {field: 'date', headerName: 'Date', type: 'date', width: 130},
        {field: 'tags', headerName: 'Tags', width: 90},
        {field: 'text', headerName: 'Text', width: 700},

        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className={classes.edit}>Edit</button>
                        </Link>
                        <DeleteOutline
                            className={classes.delete}
                            //onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <>
            <Navbar/>
            <Grid style={{marginTop: '70px'}} container spacing={2}>
                <Grid item xs={2}>
                    <Item><SidebarUser/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div style={{height: 400, width: '100%'}}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                className={classes.table}
                            />
                        </div>
                    </Item>
                </Grid>
            </Grid>

        </>
    );
}

export default BookReviews;