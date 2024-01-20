import React from 'react';

import styles from './index.module.css';
import clsx from "clsx";

const Prompt = (props: any) => {
    return (
        <div className={clsx(styles.prompt)}>
            {props.children}
        </div>
    );
};

export default Prompt;