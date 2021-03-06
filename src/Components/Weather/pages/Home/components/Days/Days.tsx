import React from 'react';
import styles from './Days.module.scss'
import {Card} from "./Card";
import {Tabs} from "./Tabs";

interface Props {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string;
    temp_day: string;
    temp_night: string;
    info: string;
}

export const Days = (props: Props) => {



    const days: Day[]  = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'small_rain_sun',
            temp_day: '+15°',
            temp_night: '+10°',
            info: 'Небольшой дождь',
        },
        {
            day: 'Пн',
            day_info: '28 авг',
            icon_id: 'small_rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Вт',
            day_info: '28 авг',
            icon_id: 'main_cloudy',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Ср',
            day_info: '28 авг',
            icon_id: 'rain',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'sun',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
    ]

    return (
        <>
            <Tabs/>
            <div className={styles.days}>
                {days.map((day:Day) => {
                    return (
                        <Card days={day} key={day.day}/>
                    )
                })}
            </div>
        </>
    );
};
