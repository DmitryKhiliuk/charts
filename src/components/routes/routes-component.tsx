import React from 'react';
import {Route} from "react-router-dom";

const mapingRoutes = (rout) =>rout.map((el) => <Route path={el.path} element={el.component}/>)

export const RoutesComponent = () => {
    return (
        <div>

        </div>
    );
};

