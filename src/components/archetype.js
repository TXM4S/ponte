import GalleryItem from "./galleryitem";
import { getArchetype } from "../data";
import { useNavigate } from "react-router-dom";

const Archetype = ( props ) => {

    const products = getArchetype();
    const navigate = useNavigate();

    const handleClick = ( index ) => {
        navigate("/archetype/" + index);
    }

    const galleryitemarray = products.map((product, index) => {
        return <GalleryItem key={index} index={index} {...props} product={product} handleClick={handleClick} image={product.Image[0]} alt={product.Name} name={product.Name} />
    });

    return (
        <div className="scrollable">
            <div className="Gallery">
                {galleryitemarray}
            </div>
            <div className="scrollFooter"></div>
        </div>
    )
}

export default Archetype;