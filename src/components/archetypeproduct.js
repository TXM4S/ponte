import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArchetypeProduct, getArchetypeLength } from "../data";


const ArchetypeProduct = () => {
    

    const { id } = useParams();
    const length = getArchetypeLength();
    const navigate = useNavigate();
    const [image, setImage] = useState([]);
    const [size, setSize] = useState(0);

    useEffect(() => {
        if(id <= 0 || id > length){
            navigate("/archetype");
        }
    }, [id, length, navigate]);

    const product = getArchetypeProduct(id);

    const imageArray = product ? product.Image : [];
    const linkArray = product ? product.Link : [];

    useEffect(() => {
        setImage(imageArray[0]);
    }, [imageArray]);

    return (
        <div className="Series1Product">
            <div className="scrollable">
                <div className="productInfo">
                    {product ? <img className="productImage archetype" src={image} alt={product && product.Name} /> : <></>}
                    {product ? <div className="imageSelection">
                        {imageArray.map((i, index) => (
                            <img key={index} className={(image === i) ? "smallimage selected" : "smallimage"} src={i} alt={product && product.Name} onClick={() => setImage(i)} />
                        ))}
                    </div> : <></>}
                    <p>{product && product.Name}</p>
                    <p>{product && product.Description}</p>
                    <p>{product && product.Kind}</p>
                    <p>€{product && product.Price}</p>
                    <p>AVALIABLE FOR PRE-ORDER SPRING/SUMMER 24</p>
                    {product && product.Sizes ? <div className="sizeSelection">
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