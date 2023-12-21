import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Burgermenu = ( props ) => {

    return (
        <div className="Burgermenu">
            {(props.menuOpen) ?
            <div className="Menulist">
                <p><Link onClick={() => props.setMenuOpen(false)}  to="/series1" >Series 1</Link></p>
                <p><Link onClick={() => props.setMenuOpen(false)} to="/series2">Series 2</Link></p>
                <p><Link onClick={() => props.setMenuOpen(false)} to="/archetype">Archetype</Link></p>
                <p><Link onClick={() => props.setMenuOpen(false)} to="/contact">Contact</Link></p>
            </div>
            : 
            <RxHamburgerMenu onClick={() => props.setMenuOpen(true)} />}
        </div>
    )
}

export default Burgermenu;