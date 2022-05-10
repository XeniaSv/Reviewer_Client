import './home.scss';
import Featured from "../../../components/general-components/featured/Featured";
import List from "../../../components/general-components/list/List";
import * as React from "react";

function Home() {
    const [tabValue, setTabValue] = React.useState('1');

    return (
        <div className="home">
            <Featured tabValue={tabValue} setTabValue={setTabValue}/>
            <List tabValue={tabValue}/>
        </div>
    );
}

export default Home;