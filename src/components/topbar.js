import Logoheader from "./header";
import Burgermenu from "./burgermenu";
import { useState } from "react";

function Topbar( props ) {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="Topbar">
            <Burgermenu {...props} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
            <Logoheader {...props} setMenuOpen={setMenuOpen}/>
        </div>
    )
}

export default Topbar;