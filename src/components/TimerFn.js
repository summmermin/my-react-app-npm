import {useState} from 'react';

const TimerFn = () => {
    let useTime = useState(0);
    let time = useTime[0];
    let setTime = useTime[1];
    const updateTime = () => {
        setTime(time + 1);
    };
    console.log(useState, useTime, setTime, time, 'dddddddddddddddddd');

    return (
        <>
            <div>timer</div>
            <h3>{time}</h3>
            <button onClick={updateTime}>더하기</button>
        </>);
};
export default TimerFn;
