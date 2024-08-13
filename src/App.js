import './App.css';
import Orange from './components/Orange';


const Apple = () => {
    return (
        <div>나는 사과</div>
    );
};

const FruitDB = [
    {
        name: 'orange', url: 'http://qwerew.cafe24.com/images/orange.png'
    },
    {
        name: 'apple', url: 'http://qwerew.cafe24.com/images/apple.png'
    },
    {
        name: 'papaya', url: 'http://qwerew.cafe24.com/images/banana.png'
    },
];

const Fruit = (props) => {
    console.log('props', props);
    const {name, url} = props;
    return (
        <div>
            <div>내가 좋아하는 {name}</div>
            <img src={url}/>
        </div>
    );
};

function App() {
    return (
        <div className="App">
            <div>hello!!</div>
            <Orange/>
            <Apple/>
            {
                FruitDB.map((o, i) => {
                    console.log(o, i, 'lllllllllllllllllll');
                    return (
                        <Fruit name={o.name} url={o.url} key={i}/>
                    );
                })
            }
            {/*<Fruit fav="banana"/>*/}
            {/*<Fruit fav="papaya"/>*/}
            {/*<Fruit something={true} list={['banana', 1, 2, true]}/>*/}
            {/*<Fruit fav="cocopam"/>*/}
        </div>
    );
}

export default App;
