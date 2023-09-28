import Logoheader from "./header";
import Burgermenu from "./burgermenu";

function Topbar( props ) {
    return (
        <div className="Topbar">
            <Burgermenu {...props} />
            <Logoheader/>
        </div>
    )
}

export default Topbar;