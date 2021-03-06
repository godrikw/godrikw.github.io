import React, {useState} from 'react';
import styles from './index.module.css'
import {Link} from "react-router-dom";
import {ReactComponent as Icon} from "../img/Group.svg";
import {routes} from "../../../routes";
import {Navigation} from "./Navigation";


export const Offer = (props) => {

    return (
        <div className={styles.offer}>
            <div className={styles.wrapper}>
                <div className={styles.wrapper_logo}>
                    <Link className={styles.logo} onClick={() => props.state(!props.states)} to={routes.root} >
                        <Icon/>
                        <h2 className={styles.logo_name}>Notitanic</h2>
                    </Link>

                    <Navigation/>


                </div>

                <div className={styles.offer_main}>
                    <div className={styles.offer_content}>
                        <span className={styles.hi}>Hello</span>
                        <span className={styles.name}>I’m Peresvet</span>
                        <span className={styles.name}>Sobolev</span>
                        <p className={styles.description}>I've been doing web design, front-end and back-end development for a year now. Do you need a website design, site layout, or maybe a turnkey website? Then contact me</p>
                        <div className={styles.button}>Contact me</div>
                    </div>
                </div>

            </div>

        </div>
    );
};
