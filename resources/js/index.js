import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Flights from './pages/Flights';
import Hotels from './pages/Hotels';
import Cars from './pages/Cars';
import Cruises from './pages/Cruises';
import Documents from './pages/Documents';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Insurance from './pages/Insurance';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsofUse from './pages/TermsofUse';
import Hotel from './pages/Hotel';
import Test from './pages/Test';
import Error from './pages/Error';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './pages/App';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Flights />} />
                    <Route path="flights" element={<Flights />} />
                    <Route path="hotels" element={<Hotels />} />
                    <Route path="cars" element={<Cars />} />
                    <Route path="cruises" element={<Cruises />} />
                    <Route path="documents" element={<Documents />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="blogdetail" element={<BlogDetail />} />
                    <Route path="insurance" element={<Insurance />} />
                    <Route path="privacypolicy" element={<PrivacyPolicy />} />
                    <Route path="termsofuse" element={<TermsofUse />} />
                    <Route path="hotels/:hotelId" element={<Hotel />} />
                    <Route path="test" element={<Test />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
