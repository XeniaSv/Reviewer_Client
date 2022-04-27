import React from 'react';
import Navbar from "../../components/navbar/Navbar";
import SidebarUser from "../../components/sidebarUser/SidebarUser";
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Profile from "../userPages/profile/Profile";
import useStyles from "../../pages/userPage/stylesUserPage";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function UserPage(props) {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Grid className={classes.wrapper} style={{marginTop: '70px'}} container spacing={2}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><SidebarUser/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item><Profile/></Item>
                </Grid>
            </Grid>

        </>
    );
}
