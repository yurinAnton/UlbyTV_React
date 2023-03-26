import React, { useContext } from "react";
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './../Router/index';
import { AuthContext } from './../Context/context';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (

        isAuth
            ? 
        <Switch>
            {privateRoutes.map(route => 
                <Route 
                component={route.component} 
                path={route.path} 
                exact={route.exact}
                key={route.path}
                />
            )}
        <Redirect to='/posts'/>
      </Switch>

            :
        <Switch>
            {publicRoutes.map(route => 
                <Route 
                component={route.component} 
                path={route.path} 
                exact={route.exact}
                key={route.path}
                />
            )}
        <Redirect to='/login'/>
      </Switch>
    )
}

export default AppRouter;