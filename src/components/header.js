import logo from '../images/PONTElogo.jpg';
import {useNavigate} from 'react-router-dom';


const LogoHeader = ( props ) => {

    const navigate = useNavigate();

    return (
        <div className="header">
            <img onClick={() => navigate("/")} src={logo} alt="PONTE logo" />
            {(props.showTitle) ? <p>{props.page}</p>: <p></p>}
        </div>
    ) 
}

export default LogoHeader;
