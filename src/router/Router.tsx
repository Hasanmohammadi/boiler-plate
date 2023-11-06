import { About, Contact, MainPage, Result, SiteInformation } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/main-page', element: <MainPage /> },
      { path: '/about-us', element: <About /> },
      { path: '/site-info', element: <SiteInformation /> },
      { path: '/contact-us', element: <Contact /> },
      { path: '/result', element: <Result /> },
    ],
  },
]);
