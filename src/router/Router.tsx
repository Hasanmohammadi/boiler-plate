import { ForgotPassword, Login } from 'pages';
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
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
]);
