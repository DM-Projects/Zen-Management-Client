import React from "react";
import {Switch, Route} from "react-router";
import CustomEditor from '../Components/Editor/index';
import Login from "../Components/Login";
import Home from '../Components/Home/Home'
const Landing = (props) => {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/login'} component={Login}/>
                <Route path={'/editor'} component={CustomEditor}/>
            </Switch>
        </React.Fragment>
    )
}

const _Home = (props) => {
    return (
        <React.Fragment>
            <section className={"home_section"}>
                <h1>Home</h1>
            </section>
        </React.Fragment>
    )
}

export default Landing;