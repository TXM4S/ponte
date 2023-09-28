import './styles/App.css';
import Topbar from './components/topbar';
import { useState } from 'react';
import Series1 from './components/series1';

function App() {
    const PageView = {
        Home: 0,
        Series1: 1,
        Series2: 2,
        Archetype: 3,
        Contact: 4
    }

    console.log(PageView.Series1);

    const [page, setPage] = useState(PageView.Home);

    const body = () => {
        switch(page){
            case PageView.Series1:
                return <Series1 />;
            default:
                return <></>;        
        }
    }

    return (
        <div className="App">
            <Topbar pageview={PageView} setPage={setPage}/>
            {body()} 
        </div>
    );
}

export default App;
