import {
  About,
  Contact,
  ForgotPassword,
  Login,
  MainPage,
  Result,
} from 'pages';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

export default createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/main-page', element: <MainPage /> },
      { path: '/about-us', element: <About /> },
      { path: '/contact-us', element: <Contact /> },
      { path: '/result', element: <Result /> },
      { path: '/login', element: <Login /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
    ],
  },
]);
