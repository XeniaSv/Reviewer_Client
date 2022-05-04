import {useState} from 'react';
import Navbar from "../../../components/general-components/navbar/Navbar";
import useStyles from "../searchPage/stylesSearchPage";
import FeaturedSearch from "../../../components/general-components/featuredSearch/FeaturedSearch";
import ReviewSearchList from "../../../components/general-components/reviewSearchList/ReviewSearchList";
import {useLocation} from "react-router-dom";


function SearchPage() {
    const classes = useStyles();

    const {search} = useLocation();
    const tag = new URLSearchParams(search).get('tag');

    const [tabValue, setTabValue] = useState('1');

    return (
        <>
            <Navbar/>
            <div className={classes.searchPage}>
                <div className={classes.container}>
                    <FeaturedSearch  tabValue={tabValue} setTabValue={setTabValue}/>
                    <ReviewSearchList  tabValue={tabValue} tag={tag}/>
                </div>
            </div>
        </>
    );
}

export default SearchPage;