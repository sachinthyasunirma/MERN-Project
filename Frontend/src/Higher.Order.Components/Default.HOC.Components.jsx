import React from 'react'
import { Route } from 'react-router-dom'
import DefaultLayout from '../Layout/Default.Layout';

const DefaultHOCComponents = ({ component: Component, ...rest }) => {
    return(
        <>
            <Route {... rest} 
            component={(props) =>(
                <DefaultLayout>
                    <Component {...props}/>
                </DefaultLayout>
            )}
            />
        </>
    );
};

export default DefaultHOCComponents;
