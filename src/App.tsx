import { useAppWebInfoContext } from 'context';
import 'flag-icons/css/flag-icons.min.css';
import { Header } from 'pages/home';
import ChangeStyleBox from 'pages/home/changeStyleBox/ChangeStyleBox';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { font } = useAppWebInfoContext();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/login');
    }
  }, [navigate, pathname]);

  return (
    <div className="h-full min-h-screen" style={{ fontFamily: font }}>
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <ChangeStyleBox />
    </div>
  );
}

export default App;
