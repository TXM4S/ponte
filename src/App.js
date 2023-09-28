import './styles/App.css';
import Topbar from './components/topbar';
import { useState } from 'react';
import Series1 from './components/series1';
import Series1Product from './components/series1product';

function App() {
    const PageView = {
        Home: "Home",
        Series1: "Series 1",
        Series2: "Series 2",
        Archetype: "Archetype",
        Contact: "Contact",
        Series1ProductPage: "Series 1 Product Page",
    }


    const [page, setPage] = useState(PageView.Home);
    const [showTitle, setShowTitle] = useState(false);
    const [currentProductPage, setCurrentProductPage] = useState({});

    const body = () => {
        switch(page){
            case PageView.Series1:
                return <Series1 setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
            case PageView.Series1ProductPage:
                console.log("test");
                return <Series1Product product={currentProductPage} />;
            default:
                return <></>;        
        }
    }

    return (
        <div className="App">
            <Topbar pageview={PageView} setShowTitle={setShowTitle} showTitle={showTitle} page={page} setPage={setPage}/>
            {body()} 
        </div>
    );
}

export default App;
