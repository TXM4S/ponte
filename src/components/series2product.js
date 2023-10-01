
const Series1Product = (props) => {

    const handleClick = () => {
        props.setPage(props.pageview.Series2);
        props.setCurrentProductPage({});
        props.setShowTitle(true);
    }

    return (
        <div className="Series2Product">
            <button className="button back" onClick={handleClick}> Back to Series 2</button>
            <div className="scrollable">
                <div className="productInfo">
                    <img className="productImage" src={props.product.Image} alt={props.product.Name} />
                    <p>{props.product.Name}</p>
                    <p>{props.product.Description}</p>
                    <p>{props.product.Kind}</p>
                    {(props.product.Price) ? <p>€{props.product.Price}</p> : <></>}
                    <a className="button" href={"mailto:contact@ponte.live?subject=" + props.product.Name}>Enquire</a>
                </div>
                <div className="scrollFooter"></div>
            </div>
        </div>
    );
}

export default Series1Product;