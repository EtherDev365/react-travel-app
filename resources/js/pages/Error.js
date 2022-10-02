import React, { useEffect, Suspense } from 'react';
import { Helmet } from 'react-helmet';

function Error() {

    return (
        <div className="min-h-[calc(100vh-70px)] pt-16 pb-12 flex flex-col bg-white">
            <Helmet
                meta={[
                    {
                        name: 'robots',
                        content: 'noindex'
                    }
                ]}
            />
            <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0 flex justify-center">
                    <a href="/" className="inline-flex">
                        <span className="sr-only">Koyap</span>
                        <svg className="h-24 w-auto" baseProfile="tiny" id="Layer_1" x="0px" y="0px" viewBox="0 0 800 400">
                            <g>
                                <path fill="#FB5D20" d="M250,267.9c-9.1-5-16.2-12.2-21.4-21.4c-5.2-9.2-7.8-19.9-7.8-32c0-12.1,2.7-22.8,8-32   c5.3-9.2,12.6-16.4,21.9-21.4c9.2-5,19.6-7.6,30.9-7.6c11.4,0,21.7,2.5,30.9,7.6c9.2,5,16.5,12.2,21.9,21.4c5.3,9.2,8,19.9,8,32   c0,12.1-2.7,22.8-8.2,32c-5.5,9.2-12.9,16.4-22.2,21.4c-9.3,5-19.7,7.6-31.2,7.6C269.3,275.4,259.1,272.9,250,267.9z M295.9,245.5   c4.8-2.6,8.6-6.6,11.4-11.8c2.8-5.3,4.3-11.7,4.3-19.2c0-11.2-3-19.9-8.9-25.9c-5.9-6-13.1-9.1-21.7-9.1s-15.7,3-21.4,9.1   c-5.8,6-8.6,14.7-8.6,25.9c0,11.2,2.8,19.9,8.4,25.9c5.6,6,12.7,9.1,21.2,9.1C286.1,249.4,291.2,248.1,295.9,245.5z" />
                                <path fill="#FB5D20" d="M477.4,155.3l-73.2,174.1h-31.8l25.6-58.9l-47.4-115.2h33.5l30.5,82.5l30.9-82.5H477.4z" />
                                <path fill="#FB5D20" d="M492.8,182.2c4.8-9.2,11.2-16.4,19.4-21.3c8.2-5,17.3-7.5,27.4-7.5c8.8,0,16.5,1.8,23.1,5.3   c6.6,3.6,11.9,8,15.9,13.4v-16.9h30.1v118.2h-30.1v-17.3c-3.8,5.5-9.1,10.1-15.9,13.8c-6.8,3.6-14.5,5.4-23.4,5.4   c-10,0-19-2.6-27.2-7.7c-8.2-5.1-14.6-12.3-19.4-21.7c-4.8-9.3-7.1-20-7.1-32.1C485.7,202,488.1,191.5,492.8,182.2z M574.4,195.8   c-2.8-5.2-6.7-9.2-11.5-11.9c-4.8-2.8-10-4.2-15.6-4.2s-10.7,1.4-15.4,4.1c-4.7,2.7-8.5,6.6-11.4,11.8c-2.9,5.2-4.4,11.3-4.4,18.5   c0,7.1,1.5,13.3,4.4,18.7c2.9,5.3,6.8,9.4,11.5,12.3c4.8,2.8,9.8,4.3,15.3,4.3c5.5,0,10.7-1.4,15.6-4.2c4.8-2.8,8.7-6.8,11.5-11.9   c2.8-5.2,4.3-11.4,4.3-18.7S577.3,201,574.4,195.8z" />
                                <path fill="#FB5D20" d="M683.7,158.9c6.8-3.6,14.5-5.4,23.1-5.4c10.1,0,19.2,2.5,27.4,7.5c8.2,5,14.6,12.1,19.4,21.2   c4.8,9.2,7.1,19.8,7.1,31.9c0,12.1-2.4,22.8-7.1,32.1c-4.8,9.3-11.2,16.5-19.4,21.7c-8.2,5.1-17.3,7.7-27.4,7.7   c-8.7,0-16.3-1.8-22.9-5.3s-12-8-16.1-13.4v73.2H638V155.3h29.9v17.1C671.7,167,677,162.5,683.7,158.9z M726,195.5   c-2.9-5.2-6.8-9.1-11.5-11.8c-4.8-2.7-9.9-4.1-15.5-4.1c-5.4,0-10.5,1.4-15.3,4.2c-4.8,2.8-8.6,6.8-11.5,12.1   c-2.9,5.3-4.4,11.4-4.4,18.6c0,7.1,1.5,13.3,4.4,18.6c2.9,5.3,6.8,9.3,11.5,12.1c4.8,2.8,9.8,4.2,15.3,4.2c5.5,0,10.7-1.4,15.5-4.3   c4.8-2.8,8.6-6.9,11.5-12.2c2.9-5.3,4.4-11.5,4.4-18.8C730.3,206.9,728.9,200.7,726,195.5z" />
                            </g>
                            <path fill="#5356E1" d="M35,84.3h52.3v54.3h27L142,84.3h84L183.8,164h-25.4l28.7-57.8l-30.8-0.4L127.2,164c0,0-26.6-1-34.7,0.7  c-8.1,1.7-27.7,13.5-27.7,13.5s24,15.5,30.4,15.5s33.2,0,33.2,0l26.6,52.3h30.5L158,192.5l26.2,0.4L226,274h-80.6l-29.6-55.3H86.9  v55.1H35V84.3z" />
                        </svg>
                    </a>
                </div>
                <div className="py-8">
                    <div className="text-center">
                        <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">404 error</p>
                        <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Page not found.</h1>
                        <p className="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                        <div className="mt-6">
                            <a href="/" className="text-base font-medium text-indigo-600 hover:text-indigo-500">Go back home<span aria-hidden="true"> &rarr;</span></a>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <nav className="flex justify-center space-x-4">
                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
                    <span className="inline-block border-l border-gray-300" aria-hidden="true"></span>
                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
                    <span className="inline-block border-l border-gray-300" aria-hidden="true"></span>
                    <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
                </nav>
            </footer>
        </div>
    );
}

export default Error;
