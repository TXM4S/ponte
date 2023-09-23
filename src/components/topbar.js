import Logoheader from "./header";
import Burgermenu from "./burgermenu";

function Topbar() {
    return (
        <div className="Topbar">
            <Burgermenu/>
            <Logoheader/>
        </div>
    )
}

export default Topbar;