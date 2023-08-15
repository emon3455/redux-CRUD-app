
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../components/Navbar';

const Main = () => {
    return (
        <div>
            <ResponsiveAppBar/>
            <Outlet/>
        </div>
    );
};

export default Main;