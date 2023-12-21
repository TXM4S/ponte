import homeimage from '../images/19.jpeg';

const Home = (props) => {
    return(
        <div className="Home">
            <img className="HomeImage" src={homeimage} alt="Home"/>
        </div>
    )
};

export default Home;