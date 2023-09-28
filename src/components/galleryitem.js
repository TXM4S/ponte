
const GalleryItem = ( props ) => {

    return(
        <div className="GalleryItem">
            <img className="GalleryImage" src={props.image} alt={props.alt} />
            <p className="ImageTitle">{props.title}</p>
            <p className="ImageDescription">{props.description}</p>
        </div>
    )
    
}

export default GalleryItem;