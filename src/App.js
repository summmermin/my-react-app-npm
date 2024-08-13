import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Recipe from './components/Recipe';


function App() {
    const [loading, setLoading] = useState({state: true, data: []});
    const [data, setData] = useState([]);

    const getDB = async () => {
        try {
            const {data} = await axios.get(`http://openapi.foodsafetykorea.go.kr/api/${process.env.REACT_APP_TOKEN}/COOKRCP01/json/1/100`);
            const {COOKRCP01: {row}} = data;
            const initData = row.map(({
                                          RCP_SEQ,
                                          RCP_NM,
                                          RCP_WAY2,
                                          RCP_PAT2,
                                          INFO_WGT,
                                          INFO_ENG,
                                          INFO_CAR,
                                          INFO_PRO,
                                          INFO_FAT,
                                          INFO_NA,
                                          HASH_TAG,
                                          ATT_FILE_NO_MAIN,
                                          ATT_FILE_NO_MK,
                                          RCP_PARTS_DTLS,
                                          MANUAL01,
                                          MANUAL_IMG01,
                                          MANUAL02,
                                          MANUAL_IMG02,
                                          MANUAL03,
                                          MANUAL_IMG03,
                                          MANUAL04,
                                          MANUAL_IMG04,
                                          MANUAL05,
                                          MANUAL_IMG05,
                                          MANUAL06,
                                          MANUAL_IMG06,
                                          MANUAL07,
                                          MANUAL_IMG07,
                                          MANUAL08,
                                          MANUAL_IMG08,
                                          MANUAL09,
                                          MANUAL_IMG09,
                                          MANUAL10,
                                          MANUAL_IMG10,
                                          MANUAL11,
                                          MANUAL_IMG11,
                                          MANUAL12,
                                          MANUAL_IMG12,
                                          MANUAL13,
                                          MANUAL_IMG13,
                                          MANUAL14,
                                          MANUAL_IMG14,
                                          MANUAL15,
                                          MANUAL_IMG15,
                                          MANUAL16,
                                          MANUAL_IMG16,
                                          MANUAL17,
                                          MANUAL_IMG17,
                                          MANUAL18,
                                          MANUAL_IMG18,
                                          MANUAL19,
                                          MANUAL_IMG19,
                                          MANUAL20,
                                          MANUAL_IMG20,
                                          RCP_NA_TIP
                                      }) => ({
                id: RCP_SEQ,
                name: RCP_NM,
                wgt: INFO_WGT,
                ingredient: RCP_PARTS_DTLS,
                nutrition: {eng: INFO_ENG, car: INFO_CAR, pro: INFO_PRO, fat: INFO_FAT, na: INFO_NA},
                category: {way: RCP_WAY2, part: RCP_PAT2, hash: HASH_TAG},
                imgs: {main_s: ATT_FILE_NO_MAIN, main_l: ATT_FILE_NO_MK},
                manual: {
                    desc: [MANUAL01, MANUAL02, MANUAL03, MANUAL04, MANUAL05, MANUAL06, MANUAL07, MANUAL08, MANUAL09, MANUAL10],
                    img: [MANUAL_IMG01, MANUAL_IMG02, MANUAL_IMG03, MANUAL_IMG04, MANUAL_IMG05, MANUAL_IMG06, MANUAL_IMG07, MANUAL_IMG08, MANUAL_IMG09, MANUAL_IMG10]
                },
            }));
            console.log(row, 'rowrowrow');
            setLoading(false);
            setData(initData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {

        setTimeout(() => {
            //레시피 데이터 로딩
            getDB();
        }, 500);
    }, []);
    return (
        <div className="App">
            {
                loading.state ? (<h1>로딩 중 입니다...</h1>) : (
                    <div className="inner">
                        <div className="group">
                            {data.map(({id, name, imgs: {main_s, main_l}}) => {
                                return <Recipe key={id} name={name} img_s={main_s} img_l={main_l}/>;
                            })}
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default App;
