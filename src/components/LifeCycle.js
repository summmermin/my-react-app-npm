import {useEffect, useState} from 'react';

const LifeCycle = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
        console.log('dependencies array 없어');
    },[time]);
    return (
        <>
            <h3>{time}</h3>
            {/*<div onClick={setTime(time + 1)}>click</div>*/}
        </>
    );
};
export default LifeCycle;
