import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {RoutesOmponent} from "./components/routes";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
        <Provider store={store}>
            <RoutesOmponent/>
        </Provider>
    </HashRouter>
  </React.StrictMode>
);

