import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Burgermenu = ( props ) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = ( page ) => {
        setMenuOpen(false);
        props.setPage(page);
    }

    return (
        <div className="Burgermenu">
            {(menuOpen) ?
            <div className="Menulist">
                <p onClick={() => handleClick(props.pageview.Series1)}>Series 1</p>
                <p onClick={() => handleClick(props.pageview.Series2)}>Series 2</p>
                <p onClick={() => handleClick(props.pageview.Archetype)}>Archetype</p>
                <p onClick={() => handleClick(props.pageview.Contact)}>Contact</p>
            </div>
            : 
            <RxHamburgerMenu onClick={() => setMenuOpen(true)} />}
        </div>
    )
}

export default Burgermenu;