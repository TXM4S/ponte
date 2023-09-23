import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Burgermenu = ( props ) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Burgermenu">
            {(menuOpen) ?
            <div className="Menulist">
                <p>Series 1</p>
                <p>Series 2</p>
                <p>Archetype</p>
                <p>Contact</p>
            </div>
            : 
            <RxHamburgerMenu onClick={() => setMenuOpen(true)} />}
        </div>
    )
}

export default Burgermenu;