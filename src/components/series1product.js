
const Series1Product = (props) => {
    return (
        <div className="scrollable">
            <div className="productInfo">
                <img className="productImage" src={props.product.Image} alt={props.product.Name} />
                <p>{props.product.Name}</p>
                <p>{props.product.Description}</p>
            </div>
        </div>
    );
}

export default Series1Product;