import GalleryItem from "./galleryitem";
import look1 from "../images/1.jpeg"
import look2 from "../images/2.jpeg"
import look3 from "../images/3.jpeg"
import look4 from "../images/4.jpeg"
import look5 from "../images/5.jpeg"
import look6 from "../images/6.jpeg"
import look7 from "../images/7.jpeg"
import look8 from "../images/8.jpeg"
import look9 from "../images/9.jpeg"
import look10 from "../images/10.jpeg"
import look11 from "../images/11.jpeg"
import look12 from "../images/12.jpeg"
import look13 from "../images/13.jpeg"
import look14 from "../images/14.jpeg"
import look15 from "../images/15.jpeg"
import look16 from "../images/16.jpeg"
import look17 from "../images/17.jpeg"
import look18 from "../images/18.jpeg"
import look19 from "../images/19.jpeg"
import look20 from "../images/20.jpeg"
import look21 from "../images/21.jpeg"
import look22 from "../images/22.jpeg"

const Series2 = ( props ) => {

    const products = [
        {Name : "Look 1", Image: look1, Description : "Cardboard shirt and trousers", Kind:"One Only" ,Price : 7500},
        {Name :"Look 2 ", Image: look2, Description : "Silver shirt and pant in deadstock fabric \n Shirt 840, Pant 920", Kind:"Series run of 3" ,Price : 1760},
        {Name : "Look 3 ", Image: look3, Description : "Hand painted pink shirt and pink trousers \n Shirt 840, pant 920", Kind: "Series run of 20" ,Price : 1760},
        {Name : "Look 4 ", Image: look4, Description : "Recomposed tube skirt from M65 army jackets with elastic jock strap waistband", Kind:"Series run of 15" ,Price : 1240},
        {Name : "Look 5 ", Image: look5, Description : "Found textile with jock strap waistband", Kind:"One Only" ,Price : 4200},
        {Name : "Look 6 ", Image: look6, Description : "Hand printed zebra viscose jersey dress", Kind:"Series run of 15" ,Price : 1650},
        {Name : "Look 7 ", Image: look7, Description : "Pink jersey viscose dress", Kind:"Series run of 15" ,Price : 1560},
        {Name : "Look 8 ", Image: look8, Description : "Recomposed hand flocked T shirt and Recomposed distorted jean with jock strap waistband \n T Shirt 490, Jean 840", Kind: "Series run of 50" ,Price : 1330},
        {Name : "Look 9 ", Image: look9, Description : "Recomposed hand flocked floral shift dress ", Kind:"Series run of 10" ,Price : 2260},
        {Name : "Look 10 ", Image: look10, Description : "Recomposed hand flocked swim suit sculpture delivered with balloon and nail for installation \n\n For loan/sale or return", Kind:"Series run of 5" ,Price : null},
        {Name : "Look 11 ", Image: look11, Description : "Recomposed dark violet ruffle apron", Kind:"One Only" ,Price : 5600},
        {Name : "Look 12 ", Image: look12, Description : "Recomposed car coat with attached cushioned neck brace", Kind:"Series run of 5" ,Price : 2000},
        {Name : "Look 13 ", Image: look13, Description : "Hand flocked and individually composed jersey top and jersey skirt \n Top 920, Skirt 970", Kind:"Series run of 30" ,Price : 1890},
        {Name : "Look 14", Image: look14, Description : "Recomposed hand flocked dress", Kind:"One Only" ,Price : 4800},
        {Name : "Look 15 ", Image: look15, Description : "For loan/sale or return", Kind:"One Only" ,Price : 4400},
        {Name : "Look 16 ", Image: look16, Description : "Jersey ring veil", Kind:"One Only" ,Price : 7600},
        {Name : "Look 17 ", Image: look17, Description : "Recomposed 1930s tuxedo jacket and trousers", Kind:"Series run of 10" ,Price : 3240},
        {Name : "Look 18 ", Image: look18, Description : "Jsilver sequin dress with detachable sequin bow belt", Kind:"Series run of 10" ,Price : 2100},
        {Name : "Look 19 ", Image: look19, Description : "White jersey distorted hip dress ", Kind:"Series run of 10" ,Price : 1570},
        {Name : "Look 20 ", Image: look20, Description : "Wool jacket with stand collar", Kind:"Series run of 10" ,Price : 3240},
        {Name : "Look 21 ", Image: look21, Description : "Deadstock faux suede collar \n\n Enquiries only", Kind:"One Only" ,Price : null},
        {Name : "Look 22 ", Image: look22, Description : "Viscose jersey distorted dress \n\n Enquiries only", Kind:"One Only" ,Price : null},
    ];

    const handleClick = ( product ) => {
        props.setPage(props.pageview.Series2ProductPage);
        props.setShowTitle(false);
        props.setCurrentProductPage(product);
    }

    const galleryitemarray = products.map((product, index) => {
        return <GalleryItem key={index} {...props} product={product} handleClick={handleClick} image={product.Image} alt={product.Name} name={product.Name} />
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

export default Series2;