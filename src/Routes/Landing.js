import React from "react";
import {Switch, Route} from "react-router";
import {CustomEditor} from '../App';
import Login from "../Components/Login";
const Landing = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={'/login'} component={Login}/>
                <Route exact path={'/editor'} component={CustomEditor}/>
            </Switch>
        </React.Fragment>
    )
}

const Home = (props) => {
    return (
        <React.Fragment>
            <section className={"home_section"}>
                <h1>Home</h1>
            </section>
        </React.Fragment>
    )
}

export default Landing;