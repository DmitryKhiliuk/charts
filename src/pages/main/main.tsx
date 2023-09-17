import React from 'react';
import {Charts} from "../../components/charts";

import styles from './main.module.sass'

export const Main = () => {
    return (
        <div className={styles.container}>
            <Charts/>
        </div>
    );
};

