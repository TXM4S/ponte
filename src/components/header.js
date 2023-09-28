import logo from '../images/PONTElogo.jpg';


const logoheader = ( props ) => {

    const handleClick = () => {
        props.setPage(props.pageview.Home);
        props.setMenuOpen(false);
        props.setShowTitle(false);
    }


    return (
        <div className="header">
            <img onClick={handleClick} src={logo} alt="PONTE logo" />
            {(props.showTitle) ? <p>{props.page}</p>: <p></p>}
        </div>
    ) 
}

export default logoheader;
