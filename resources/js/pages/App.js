import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../components/Header';
import Footer from '../components/Footer';
// const Header = React.lazy(() => import('../components/Header'));
// const Flights = React.lazy(() => import('./Flights'));

function App() {
    return (
        <>
            <Header />
            <div className="w-full !mx-auto rounded-md xl:!w-3/4">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
