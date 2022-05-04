import useStyles from './stylesFeaturedSearch'
import * as React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from "@mui/material";
import {TabContext} from "@mui/lab";

function FeaturedSearch({tabValue, setTabValue}) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box className={classes.nav}>
            <TabContext value={tabValue}>
                <Tabs className={classes.tab} value={tabValue} onChange={handleChange} centered>
                    <Tab value="1" label="Фильмы"/>
                    <Tab value="2" label="Сериалы"/>
                    <Tab value="3" label="Книги"/>
                </Tabs>
            </TabContext>
        </Box>

    );
}

export default FeaturedSearch;