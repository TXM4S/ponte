import GalleryItem from "./galleryitem";
import georgethomasparker from "../images/georgethomasparker.png";
import divorcedress from "../images/divorcedress.png";
import dotdress from "../images/dotdress.png";
import blouseapron from "../images/blouseapron.png";
import billyskirt from "../images/billyskirt.png";
import kesshort from "../images/kesshort.png";
import cosettanktop from "../images/2dcorsettanktop.png";
import spanksjeans from "../images/spanksjeans.png";
import thehairdress from "../images/thehairdress.png";
import carpetshiftdress from "../images/carpetshiftdress.png";
import destroyedeveninggown from "../images/destroyedeveninggown.png";
import nakedsequinskirt from "../images/nakedsequinskirt.png";
import wigskirt from "../images/wigskirt.png";
import therorydress from "../images/therorydress.png";
import rawsuit from "../images/rawsuit.png";
import newrichdress from "../images/newrichdress.png";
import tullet from "../images/tullet.png";
import knittedbriefs from "../images/knittedbriefs.png";
import oldmoneydress from "../images/oldmoneydress.png";
import suedebody from "../images/suedebody.png";
import suedecargo from "../images/suedecargo.png";
import georgethomasdress from "../images/georgethomasdress.png";
import curlyminidress from "../images/curlyminidress.png";
import thepinksuit from "../images/thepinksuit.png";
import quietcoat from "../images/quietcoat.png";
import chainmaildiscodress from "../images/chainmaildiscodress.png";


const Series1 = ( props ) => {

    const products = [
        {Name : "Look 1", Image: georgethomasparker, Description : "Recomposed surplus shearling patched parker dress. Drawstring removable hood with brass eyelets in chocolate brown with tonal cotton viscose lining", Kind:"One of a Kind" ,Price : 9900},
        {Name : "Look 2", Image: dotdress, Description : "Recomposed viscose jersey dot print double dress", Kind:"One of a Kind" ,Price : 675},
        {Name : "Look 3", Image: blouseapron, Description : "Recomposed Pink Polyester pleated Blouse Apron", Kind:"One of a Kind" ,Price : 675},
        {Name : "Look 4", Image : divorcedress, Description : "Mirror Shine printed poly coreseted midi dress with drysuit back zip, with removable utility doughnut belt", Kind:"One of a Kind" ,Price : 12150},
        {Name : "Look 5", Image : billyskirt, Description : "Deadstock Polka dot and blackchiffon vest dress, with recomposed removable elastic waistband for skirt", Kind:"One of a Kind" ,Price : 945},
        {Name : "Look 6", Image : kesshort, Description: "Deadstockbed sheet drawstring oversizedcotton short", Kind:"One of a Kind" ,Price : 405},
        {Name : "Look 7", Image : cosettanktop, Description: "Recomposed boneless jersey and lace Corsetaplique jerseytank top.", Kind:"One of a Kind" ,Price : 540},
        {Name : "Look 8", Image : spanksjeans, Description : "Recomposed XXXI denimjeans, withsnap fastened under stretch short, multistylewear", Kind:"One of a Kind" ,Price : 675},
        {Name : "Look 9", Image : thehairdress, Description : "Deadstock wig applique stretch mini dress", Kind:"One of a Kind" ,Price : 1080},
        {Name : "Look 10", Image : carpetshiftdress, Description : "Deadstock faux fur shift dress with zip side closure", Kind:"One of a Kind" ,Price : 810},
        {Name : "Look 11", Image : destroyedeveninggown, Description : "Destroyed sequin side opening dress, with stretch under corset.", Kind:"One of a Kind" ,Price : 1890},
        {Name : "Naked Sequin Skirt", Image : nakedsequinskirt, Description : "Nude stretch skirt, with removable sequin front panel with dress function", Kind:"One of a Kind" ,Price : 945},
        {Name : "Wig Skirt", Image : wigskirt, Description : "Recomposed wig applique cotton base mini skirt", Kind:"One of a Kind" ,Price : 1080},
        {Name : "The Rory Dress", Image : therorydress, Description : "Rose pink silk pleated dress with front button opening", Kind:"One of a Kind" ,Price : 1890},
        {Name : "Raw Suit", Image : rawsuit, Description : "Wool raw edge cut suit with chalk detailing \n\n Trousers 300, Blazer 400", Kind:"One of a Kind" ,Price : 1890},
        {Name : "New Rich Dress", Image : newrichdress, Description : "Deadstock faux fur corseted strapless dress with removable utility doughnut belt", Kind:"One of a Kind" ,Price : 13500},
        {Name : "Tulle T", Image : tullet, Description : "Tulle two-tone double layer t-shirt", Kind:"One of a Kind" ,Price : 216},
        {Name : "Knitted Briefs", Image : knittedbriefs, Description : "Alpaca and wool blend hand knitted y-front briefs", Kind:"One of a Kind" ,Price : 540},
        {Name : "Old Money Dress", Image : oldmoneydress, Description : "Removable deadstock Mongolian shearling panelled stretch midi dress, with extend bra back closure", Kind:"One of a Kind" ,Price : 5400},
        {Name : "Suede Body", Image : suedebody, Description : "Multi tone boned short body suit in deadstock goat suede", Kind:"One of a Kind" ,Price : 5400},
        {Name : "Suede Cargo", Image : suedecargo, Description : "Multi pocket cargo in deadstock goat suede", Kind:"One of a Kind" ,Price : 4050},
        {Name : "George Thomas Dress", Image : georgethomasdress, Description : "Recomposed surplus shearling patched dress in chocolate brown with tonal cotton viscose lining", Kind:"One of a Kind" ,Price : 6750},
        {Name : "Curly Mini Dress", Image : curlyminidress, Description : "Removable deadstock shearling panelled stretch corset mini dress", Kind:"One of a Kind" ,Price : 2160},
        {Name : "The Pink Suit", Image : thepinksuit, Description : "Raw edge cut deadstock Ponte milano jersey three button suit, with silk covered shoulder pads \n\n Jacket 150, Skirt 80", Kind:"One of a Kind" ,Price : 621},
        {Name : "Quiet Coat", Image : quietcoat, Description : "Drill gaberdine car coat with black bra strap martangal", Kind:"One of a Kind" ,Price : 1620},
        {Name : "Chainmail Disco Dress", Image : chainmaildiscodress, Description : "Chain mail ring linked dress, with recomposed chain straps", Kind:"One of a Kind" ,Price : 3510}
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