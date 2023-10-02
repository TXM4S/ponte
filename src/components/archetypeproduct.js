import { useState } from "react";


const ArchetypeProduct = ( props ) => {

    console.log(props);

    const handleClick = () => {
        props.setPage(props.pageview.Archetype);
        props.setCurrentProductPage({});
        props.setShowTitle(true);
    }

    const imageArray = props.product.Image;
    const linkArray = props.product.Link;

    const [image, setImage] = useState(imageArray[0]);
    const [size, setSize] = useState(0);

    return (
        <div className="Series1Product">
            <button className="button back" onClick={handleClick}>Back to Archetypes</button>
            <div className="scrollable">
                <div className="productInfo">
                    <img className="productImage" src={image} alt={props.product.Name} />
                    <div className="imageSelection">
                        {imageArray.map((i, index) => (
                            <img key={index} className={(image === i) ? "smallimage selected" : "smallimage"} src={i} alt={props.product.Name} onClick={() => setImage(i)} />
                        ))}
                    </div>
                    <p>{props.product.Name}</p>
                    <p>{props.product.Description}</p>
                    <p>{props.product.Kind}</p>
                    <p>€{props.product.Price}</p>
                    <p>AVALIABLE FOR PRE-ORDER SPRING/SUMMER 24</p>
                    {props.product.Sizes ? <div className="sizeSelection">
                        <button className={(size === 0) ? "button fill" : "button"} onClick={() => setSize(0)}>S</button>
                        <button className={(size === 1) ? "button fill" : "button"} onClick={() => setSize(1)}>M</button>
                        <button className={(size === 2) ? "button fill" : "button"} onClick={() => setSize(2)}>L</button>
                    </div> : <></>}
                    <a target="_blank" rel="noreferrer" href={linkArray[size]} className="button wide">Buy</a>
                </div>
                <div className="scrollFooter"></div>
            </div>
        </div> 
    );
}

export default ArchetypeProduct;