import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ProtoTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            (auth && auth.role === "admin") || (auth && auth.role === "driver") ? (
                <Component {...props} />
            ) : (
                <Redirect to="/" />
            )
        }
    />
);

PrivateRoute.prototype = {
    auth: ProtoTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth.user,
});

export default connect(mapStateToProps, null)(PrivateRoute);