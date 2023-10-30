import { About, Home } from 'pages';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'manage-stays',
        element: <div> </div>,
      },
    ],
  },
  { path: '/home', element: <Home /> },
  { path: '/about-us', element: <About /> },
]);
