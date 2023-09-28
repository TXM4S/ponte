import GalleryItem from "./galleryitem";
import img1 from "../images/bg removed_1.svg";
import img2 from "../images/bg removed_2.svg";
import img3 from "../images/bg removed_3.svg";
import img4 from "../images/bg removed_4.svg";
import img5 from "../images/bg removed_5.svg";
import img6 from "../images/bg removed_6.svg";


const Series1 = () => {
    return(
        <div className="Gallery">
            <GalleryItem image={img1} alt="Series 1" title="Series 1" description="This is the first series of the collection." />
            <GalleryItem image={img2} alt="Series 2" title="Series 2" description="This is the second series of the collection." />
            <GalleryItem image={img3} alt="Archetype" title="Archetype" description="This is the archetype of the collection." /> 
            <GalleryItem image={img4} alt="Series 1" title="Series 1" description="This is the first series of the collection." />
            <GalleryItem image={img5} alt="Series 2" title="Series 2" description="This is the second series of the collection." />
            <GalleryItem image={img6} alt="Archetype" title="Archetype" description="This is the archetype of the collection." />
        </div>
    );
}

export default Series1;