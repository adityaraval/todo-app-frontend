/* eslint-disable */

import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const RouteGuard = (props)=>{
  const {component,isPrivate,isAuthenticated} = props;
  if(isPrivate){
            return (
            <PrivateRoute
                component={component}
                isAuthenticated={isAuthenticated}
                {...props}
            />
        );
  }
        return (
            <PublicRoute
                component={component}
                isAuthenticated={isAuthenticated}
                {...props}
            />
        );
}

const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/"} />
        )
      }
    />
  );
}

const PublicRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        //(<Component {...props} />)
        isAuthenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={"/todo"} />
        )
      }
    />
  );
}


const mapStateToProps =  state => {
  const token = localStorage.getItem('token');
  const isAuthenticated = token ? true : false;
  return {
    isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteGuard);