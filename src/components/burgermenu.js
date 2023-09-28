import { RxHamburgerMenu } from "react-icons/rx";

const Burgermenu = ( props ) => {


    const handleClick = ( page ) => {
        props.setMenuOpen(false);
        props.setShowTitle(true);
        props.setPage(page);
    }

    return (
        <div className="Burgermenu">
            {(props.menuOpen) ?
            <div className="Menulist">
                <p onClick={() => handleClick(props.pageview.Series1)}>Series 1</p>
                <p onClick={() => handleClick(props.pageview.Series2)}>Series 2</p>
                <p onClick={() => handleClick(props.pageview.Archetype)}>Archetype</p>
                <p onClick={() => handleClick(props.pageview.Contact)}>Contact</p>
            </div>
            : 
            <RxHamburgerMenu onClick={() => props.setMenuOpen(true)} />}
        </div>
    )
}

export default Burgermenu;