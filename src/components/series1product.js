import { useParams } from "react-router-dom";
import { getSeries1Product, getSeries1Length } from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const Series1Product = () => {

    const { id } = useParams();
    const length = getSeries1Length();
    const navigate = useNavigate();

    useEffect(() => {
        if(id <= 0 || id > length){
            navigate("/series1");
        }
    }, [id, length, navigate]);

    const product = getSeries1Product(id);

    return (
        <div className="Series1Product">
            <div className="scrollable">
                <div className="productInfo">
                    {product ? <img className="productImage" src={product.Image} alt={product.Name} /> : <></>}
                    <p>{ product  && product.Name }</p>
                    <p>{ product && product.Description }</p>
                    <p>{ product && product.Kind }</p>
                    <p>€{ product && product.Price }</p>
                    <a className="button" href={"mailto:contact@ponte.live?subject=" + (product && product.Name)}>Enquire</a>
                </div>
                <div className="scrollFooter"></div>
            </div>
        </div>
    );
}

export default Series1Product;