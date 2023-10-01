
const GalleryItem = ( props ) => {

    return(
        <div onClick={() => props.handleClick(props.product)} className="GalleryItem">
            <img className="GalleryImage" src={props.image} alt={props.alt} />
            {/*<p className="ImageTitle">{props.look}</p>*/}
            <p className="ImageDescription">{props.name}</p>
        </div>
    )
    
}

export default GalleryItem;