import './styles/App.css';
import Topbar from './components/topbar';
import { useState } from 'react';
import Home from './components/home';
import Series1 from './components/series1';
import Series1Product from './components/series1product';
import Series2 from './components/series2';
import Series2Product from './components/series2product';
import Contact from './components/contact';

function App() {
    const PageView = {
        Home: "Home",
        Series1: "Series 1",
        Series2: "Series 2",
        Archetype: "Archetype",
        Contact: "Contact",
        Series1ProductPage: "Series 1 Product Page",
        Series2ProductPage: "Series 2 Product Page",
    }


    const [page, setPage] = useState(PageView.Home);
    const [showTitle, setShowTitle] = useState(false);
    const [currentProductPage, setCurrentProductPage] = useState({});

    const body = () => {
        switch(page){
            case PageView.Home:
                return <Home />;
            case PageView.Series1:
                return <Series1 setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
            case PageView.Series1ProductPage:
                return <Series1Product setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage} product={currentProductPage} />;
            //case PageView.Series2:
            //    return <Series2 setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
            //case PageView.Series2ProductPage:
            //    return <Series2Product setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage} product={currentProductPage} />;
            case PageView.Contact:
                return <Contact/>
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
