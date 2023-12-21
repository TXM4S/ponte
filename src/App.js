import './styles/App.css';
import Topbar from './components/topbar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
    // const PageView = {
    //     Home: "Home",
    //     Series1: "Series 1",
    //     Series2: "Series 2",
    //     Archetype: "Archetype",
    //     Contact: "Contact",
    //     Series1ProductPage: "Series 1 Product Page",
    //     Series2ProductPage: "Series 2 Product Page",
    //     ArchetypeProductPage: "Archetype Product Page"
    // }

    const [showTitle, setShowTitle] = useState(false);

    // const body = () => {
    //     switch(page){
    //         case PageView.Home:
    //             return <Home />;
    //         case PageView.Series1:
    //             return <Series1 setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
    //         case PageView.Series1ProductPage:
    //             return <Series1Product setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage} product={currentProductPage} />;
    //         case PageView.Series2:
    //             return <Series2 setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
    //         case PageView.Series2ProductPage:
    //             return <Series2Product setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage} product={currentProductPage} />;
    //         case PageView.Archetype:
    //             return <Archetype setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage}/>;
    //         case PageView.ArchetypeProductPage:
    //             return <ArchetypeProduct setShowTitle={setShowTitle} setPage={setPage} pageview={PageView} setCurrentProductPage={setCurrentProductPage} product={currentProductPage} />;
    //         case PageView.Contact:
    //             return <Contact/>
    //         default:
    //             return <></>;        
    //     }
    // }

    return (
        <div className="App">
            <Topbar />
            {/* {body()}  */}
            <Outlet/>
        </div>
    );
}

export default App;
