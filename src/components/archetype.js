import GalleryItem from "./galleryitem";
import archetype1a from "../images/ARCHETYPES1A.jpg";
import archetype1b from "../images/ARCHETYPES1B.jpg";
import archetype1c from "../images/ARCHETYPES1C.jpg";
import archetype1d from "../images/ARCHETYPES1D.jpg";
import archetype2a from "../images/ARCHETYPES2A.jpg";
import archetype2b from "../images/ARCHETYPES2B.jpg";
import archetype2c from "../images/ARCHETYPES2C.jpg";
import archetype2d from "../images/ARCHETYPES2D.jpg";
import archetype2e from "../images/ARCHETYPES2E.jpg";
import archetype2f from "../images/ARCHETYPES2F.jpg";
import archetype2g from "../images/ARCHETYPES2G.jpg";
import archetype3a from "../images/ARCHETYPES3A.jpg";
import archetype3b from "../images/ARCHETYPES3B.jpg";
import archetype3c from "../images/ARCHETYPES3C.jpg";
import archetype3d from "../images/ARCHETYPES3D.jpg";
import archetype4a from "../images/ARCHETYPES4A.jpg";
import archetype4b from "../images/ARCHETYPES4B.jpg";
import archetype4c from "../images/ARCHETYPES4C.jpg";
import archetype4d from "../images/ARCHETYPES4D.jpg";
import archetype4e from "../images/ARCHETYPES4E.jpg";
import archetype4f from "../images/ARCHETYPES4F.jpg";
import archetype4g from "../images/ARCHETYPES4G.jpg";
import archetype5a from "../images/ARCHETYPES5A.jpg";
import archetype5b from "../images/ARCHETYPES5B.jpg";
import archetype5c from "../images/ARCHETYPES5C.jpg";
import archetype5d from "../images/ARCHETYPES5D.jpg";
import archetype5f from "../images/ARCHETYPES5F.jpg";
import archetype5g from "../images/ARCHETYPES5G.jpg";
import archetype6a from "../images/ARCHETYPES6A.jpg";
import archetype6b from "../images/ARCHETYPES6B.jpg";
import archetype6c from "../images/ARCHETYPES6C.jpg";
import archetype6d from "../images/ARCHETYPES6D.jpg";
import archetype6e from "../images/ARCHETYPES6E.jpg";
import archetype7a from "../images/ARCHETYPES7A.jpg";
import archetype8a from "../images/ARCHETYPES8A.jpg";
import archetype8b from "../images/ARCHETYPES8B.jpg";
import archetype8c from "../images/ARCHETYPES8C.jpg";
import archetype8d from "../images/ARCHETYPES8D.jpg";
import archetype8e from "../images/ARCHETYPES8E.jpg";
import archetype8f from "../images/ARCHETYPES8F.jpg";
import archetype8g from "../images/ARCHETYPES8G.jpg";
import archetype9a from "../images/ARCHETYPES9A.jpg";
import archetype9b from "../images/ARCHETYPES9B.jpg";
import archetype9c from "../images/ARCHETYPES9C.jpg";
import archetype9d from "../images/ARCHETYPES9D.jpg";


const Archetype = ( props ) => {

    const products = [
        {Name : "Archetype 1 ", Image: [archetype1a, archetype1b, archetype1c, archetype1d], Description : "Recomposed denim jean with jock strap waistband", Kind:"series one of 50" , Link: ["https://buy.stripe.com/cN23f6fMraNA0x2bIK", "https://buy.stripe.com/4gw8zq57N6xk1B6fZ1", "https://buy.stripe.com/dR6g1S0Rx8Fs0x2bIM"], Sizes: true ,Price : 860}, 
        {Name : "Archetype 2 ", Image: [archetype2a, archetype2b, archetype2c, archetype2d, archetype2e, archetype2f, archetype2g], Description : "Recomposed denim skirt with jock strap waistband", Kind:"series one of 50" , Link: ["https://buy.stripe.com/14k8zq2ZFf3Q5Rm6ot", "https://buy.stripe.com/aEUcPGeIn7Bogw03ci", "https://buy.stripe.com/dR68zq1VB4pcdjO007"], Sizes: true ,Price : 970},
        {Name : "Archetype 3 ", Image: [archetype3a, archetype3b, archetype3c, archetype3d], Description : "Recomposed rolled jeans with elasticated waist", Kind:"series one of 50" , Link: ["https://buy.stripe.com/28oeXO9o3aNA5Rm008", "https://buy.stripe.com/cN27vm6bRdZM3JedQZ", "https://buy.stripe.com/9AQg1S43JdZMdjOeV4"], Sizes: true  ,Price : 920},
        {Name : "Archetype 4 ", Image: [archetype4a, archetype4b, archetype4c, archetype4d, archetype4e, archetype4f, archetype4g], Description : "Recomposed M65 army jacket trouser", Kind:"series one of 50" , Link: ["https://buy.stripe.com/6oEdTK2ZF3l8a7CdR1", "https://buy.stripe.com/dR6eXOgQvbREgw0bIU", "https://buy.stripe.com/dR6dTKfMrbREdjOcMZ"] ,Sizes: true  ,Price : 1100},
        {Name : "Archetype 5 ", Image: [archetype5a, archetype5b, archetype5c, archetype5d, archetype5f, archetype5g], Description : "Recomposed M65 army jacket", Kind:"series one of 50" , Link: ["https://buy.stripe.com/9AQ7vm1VB5tg5Rm14i", "https://buy.stripe.com/dR64jaeInf3Q6Vq3cr", "https://buy.stripe.com/6oEcPG8jZ5tggw0aEU"], Sizes: true  ,Price : 1510},
        {Name : "Archetype 6 ", Image: [archetype6a, archetype6b, archetype6c, archetype6d, archetype6e], Description : "Recomposed M65 army lining shirt", Kind:"series one of 50" , Sizes: true , Link: ["https://buy.stripe.com/6oE5neas7bREgw08wN", "https://buy.stripe.com/8wM02U43J6xk2Fa7sK", "https://buy.stripe.com/5kA6ribwbbRE5RmcN5"], Price : 1400},
        {Name : "Archetype 7 ", Image: [archetype7a], Description : "Hand flocked T shirt", Kind:"series one of 50" , Sizes: true , Link: ["https://buy.stripe.com/bIY9Du2ZFdZM0x2cN6", "https://buy.stripe.com/9AQbLCcAf1d0enS8wR", "https://buy.stripe.com/aEU2b27fV9Jwgw05kG"] ,Price : 390},
        {Name : "Archetype 8 ", Image: [archetype8a, archetype8b, archetype8c, archetype8d, archetype8e, archetype8f, archetype8g], Description : "Recomposed M65 army jacket pencil skirt with jock strap waistband", Kind:"series one of 50" , Sizes: true , Link: ["https://buy.stripe.com/7sIg1S6bR3l84Ni6oL", "https://buy.stripe.com/cN2cPG43JdZMenSeVi", "https://buy.stripe.com/6oEbLC8jZ4pcgw03cB"] ,Price : 945},
        {Name : "Archetype 9 ", Image: [archetype9a, archetype9b, archetype9c, archetype9d], Description : "Recomposed jerry cloth tube tank", Kind:"series one of 50" , Sizes: false , Link : ["https://buy.stripe.com/aEU16YdEj2h4djO5kL"] ,Price : 380},
    ];

    const handleClick = ( product ) => {
        console.log("handleClick"); 
        props.setPage(props.pageview.ArchetypeProductPage);
        props.setShowTitle(false);
        props.setCurrentProductPage(product);
    }

    const galleryitemarray = products.map((product, index) => {
        return <GalleryItem key={index} {...props} product={product} handleClick={handleClick} image={product.Image[0]} alt={product.Name} name={product.Name} />
    });

    return (
        <div className="scrollable">
            <div className="Gallery">
                {galleryitemarray}
            </div>
            <div className="scrollFooter"></div>
        </div>
    )
}

export default Archetype;