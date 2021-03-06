import React from 'react';
import styles from './index.module.css'
import classnames from 'classnames';



export const Slide = (props) => {

    return (
        <div
            onClick={() => {
                props.onClick()
            }}
            className={classnames(styles.block, {
                //применить это,     если это
                [`${styles.active}`]: props.isActive
            })}
            style={props.style}
        >
            <span className={styles.text}>{props.text}</span>
        </div>
    );
};
