import GalleryItem from "./galleryitem";
import { getSeries1 } from "../data";
import { useNavigate } from "react-router-dom";


const Series1 = ( props ) => {

    const products = getSeries1();
    const navigate = useNavigate();

    const handleClick = ( index ) => {
        navigate("/series1/" + index);
    }

    const galleryitemarray = products.map((product, index) => {
        return <GalleryItem key={index} index={index} {...props} product={product} handleClick={handleClick} image={product.Image} alt={product.Name} name={product.Name} />
    });

    return(
        <div className="scrollable">
            <div className="Gallery">
                {galleryitemarray}
            </div>
            <div className="scrollFooter"></div>
        </div>
    );
}

export default Series1;