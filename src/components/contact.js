import Image  from "../images/contact.png"
const Contact = () => {


 return( 
    <div className="contact">
        <img src= {Image} alt="Model"/> 
        <div className="mediabuttons">
            <a href={"mailto:contact@ponte.live?subject= General Enquiry" } className="button">Email</a>
            <a target="_blank" rel="noreferrer" href={"https://www.instagram.com/__ponte___/"} className="button">Instagram</a>
        </div>
    </div>
 )

}


export default Contact