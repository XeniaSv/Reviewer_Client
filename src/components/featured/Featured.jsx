import useStyles from './stylesFeatured'
import * as React from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {Box} from "@mui/material";
import {TabContext} from "@mui/lab";

function Featured({tabValue, setTabValue}) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box className={classes.nav}>
            <TabContext value={tabValue}>
                <Tabs className={classes.tab} value={tabValue} onChange={handleChange} centered>
                    <Tab value="1" label="Recent"/>
                    <Tab value="2" label="High rating"/>
                </Tabs>
            </TabContext>
        </Box>

    );
}

export default Featured;