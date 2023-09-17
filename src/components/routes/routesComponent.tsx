import React from 'react';
import {Route, Routes} from "react-router-dom";
import {AUTH, MAIN, RECOVERY, REG} from "../../common/routes";
import {Auth} from "../../pages/auth";
import {Registration} from "../../pages/registration";
import {Recovery} from "../../pages/recovery";
import {Main} from "../../pages/main";

type RoutesMainType = typeof routesAuth

const routesAuth = [
    {path: MAIN, component: <Main/>},
    {path: AUTH, component: <Auth/>},
    {path: REG, component: <Registration/>},
    {path: RECOVERY, component: <Recovery/>},
]

const mapingRoutes = (rout: RoutesMainType) =>rout.map((el) => <Route path={el.path} element={el.component}/>)

export const RoutesOmponent = () => {
    return (
        <div>
            <Routes>
                {mapingRoutes(routesAuth)}
            </Routes>
        </div>
    );
};

