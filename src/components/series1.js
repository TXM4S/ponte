import GalleryItem from "./galleryitem";
import divorcedress from "../images/bg removed_1.svg";
import img2 from "../images/bg removed_2.svg";
import img3 from "../images/bg removed_3.svg";
import img4 from "../images/bg removed_4.svg";
import img5 from "../images/bg removed_5.svg";
import img6 from "../images/bg removed_6.svg";


const Series1 = ( props ) => {

    const products = [
        {Name : "Divorce Dress", "Image" : divorcedress, Description : "Mirror Shine printed poly coreseted midi dress with drysuit back zip, with removable utility doughnut belt", Price : 4500},
    ];

    const handleClick = ( product ) => {
        console.log("handleClick"); 
        props.setPage(props.pageview.Series1ProductPage);
        props.setShowTitle(false);
        props.setCurrentProductPage(product);
    }

    const galleryitemarray = products.map((product, index) => {
        return <GalleryItem key={index} {...props} product={product} handleClick={handleClick} image={product.Image} alt={product.Name} look={"Look "+ (index+1)} name={product.Name} />
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