import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({component: Component, ...rest}) {
    const { currentUser } = useAuth();
    return (
        <Route 
            {...rest}
            render={props => { // Establishes private route for only signed in users
               return currentUser ? <Component {...props} /> : <Redirect to= "/front-page" />
            }}
        >

        </Route>
    )
}
