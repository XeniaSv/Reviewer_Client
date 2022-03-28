import Topbar from "../../components/topbar/Topbar";
import React, {useContext, useEffect, useMemo, useState} from "react";

import axios from "axios";
import useStyles from "./stylesAdminPage";
import Grid from "@mui/material/Grid";

import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import SidebarAdmin from "../../components/sidebarAdmin/SidebarAdmin";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Admin() {
    const classes = useStyles();

    return (
        <>
            <Topbar/>
            <Grid container className={classes.wrapper} spacing={0}>
                <Grid className={classes.hide} item xs={2}>
                    <Item><SidebarAdmin/></Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <div className={classes.home}>
                            <div className={classes.homeWidgets}>
                                <h3>Admin Page</h3>
                            </div>
                        </div>
                    </Item>
                </Grid>
            </Grid>
        </>
    );
}

export default Admin;