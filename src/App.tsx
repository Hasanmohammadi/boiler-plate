import 'flag-icons/css/flag-icons.min.css';
import { Header } from 'pages/home';
import ChangeStyleBox from 'pages/home/changeStyleBox/ChangeStyleBox';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <div className="h-full min-h-screen">
      <Header />
      <div className="w-full">
        <Outlet />
      </div>
      <ChangeStyleBox />
    </div>
  );
}

export default App;
