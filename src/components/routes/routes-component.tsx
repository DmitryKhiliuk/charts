import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AUTH, MAIN, RECOVERY, REG} from "../../common/routes";
import {Auth} from "../auth";
import {Registration} from "../registration";
import {Recovery} from "../recovery";

type RoutesMainType = typeof routesAuth

const routesAuth = [
    {path: MAIN, component: <Auth/>},
    {path: AUTH, component: <Auth/>},
    {path: REG, component: <Registration/>},
    {path: RECOVERY, component: <Recovery/>},
]

const mapingRoutes = (rout: RoutesMainType) =>rout.map((el) => <Route path={el.path} element={el.component}/>)

export const RoutesComponent = () => {
    return (
        <div>
            <Routes>
                {mapingRoutes(routesAuth)}
            </Routes>
        </div>
    );
};

