import './App.css';
import {useEffect, useState} from 'react';

let object = {one: '1', two: '2', three: '3'};
let {one, two, three} = object;
console.log(one, two, three);

function App() {
    const [loading, setLoading] = useState({state: true, data: []});
    console.log(loading);
    useEffect(() => {
        setTimeout(() => {
            //레시피 데이터 로딩
            setLoading(false);
        }, 500);
    }, []);
    return (
        <div className="App">
            {loading && <h1>로딩 중 입니다...</h1>}
        </div>
    );
}

export default App;
