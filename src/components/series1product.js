
const Series1Product = (props) => {
    return (
        <div className="scrollable">
            <div className="productInfo">
                <img className="productImage" src={props.product.Image} alt={props.product.Name} />
                <p>{props.product.Name}</p>
                <p>{props.product.Description}</p>
                <p>{props.product.Kind}</p>
                <p>€{props.product.Price}</p>
                <a className="button" href={"mailto:contact@ponte.live?subject=" + props.product.Name}>Enquire</a>
            </div>
            <div className="scrollFooter"></div>
        </div>
    );
}

export default Series1Product;