import './style/Recipe.css';

const Recipe = ({name, img_s, img_l}) => {
    console.log(name, img_s);

    return <>
        <div className="list">
            <img src={img_s} alt={name}/>
            <div>{name}</div>
        </div>

    </>;
};
export default Recipe;
