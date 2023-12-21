import './styles/App.css';
import Topbar from './components/topbar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Topbar />
            <Outlet/>
        </div>
    );
}

export default App;
