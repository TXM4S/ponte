import { useParams } from "react-router-dom";
import { getSeries2Product, getSeries2Length } from "../data";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';


const Series2Product = () => {

    const { id } = useParams();
    const length = getSeries2Length();
    const navigate = useNavigate();

    useEffect(() => {
        if(id <= 0 || id > length){
            navigate("/series2");
        }
    }, [id, length, navigate]);

    const product = getSeries2Product(id);

    return (
        <div className="Series2Product">
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

export default Series2Product;