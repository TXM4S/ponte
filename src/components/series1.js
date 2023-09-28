import GalleryItem from "./galleryitem";
import img1 from "../images/bg removed_1.svg";
import img2 from "../images/bg removed_2.svg";
import img3 from "../images/bg removed_3.svg";
import img4 from "../images/bg removed_4.svg";
import img5 from "../images/bg removed_5.svg";
import img6 from "../images/bg removed_6.svg";


const Series1 = () => {
    return(
        <div className="scrollable">
            <div className="Gallery">
                <GalleryItem image={img1} alt="Divorce Dress" title="Look 1" description="Divorce Dress" />
                <GalleryItem image={img2} alt="Naked Sequin Skirt" title="Look 2" description="Naked Sequin Skirt" />
                <GalleryItem image={img3} alt="Dot Dress" title="Look 3" description="Dot Dress" /> 
                <GalleryItem image={img4} alt="Pleated Blouse Apron" title="Look 4" description="Pleated Blouse Apron" />
                <GalleryItem image={img5} alt="Football Shirt" title="Look 5" description="Football Shirt" />
                <GalleryItem image={img6} alt="George Thomas Parker" title="Look 6" description="George Thomas Parker" />
            </div>
            <div className="scrollFooter"></div>
        </div>
    );
}

export default Series1;