import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import ProtoTypes from "prop-types";

/**
 * Middleware for protecting routes.
 * Makes use of the current user's session information.
 * TODO: Research what to do with this (?)
 * @param Component
 * @param auth
 * @param rest
 * @returns {JSX.Element}
 * @constructor
 */

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            (auth && auth.role === "admin") || (auth && auth.role === "user") ? (
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