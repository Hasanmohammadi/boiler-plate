import 'flag-icons/css/flag-icons.min.css';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <div className="flex flex-row h-full min-h-screen">
      {/* <Header /> */}
      <div className="flex justify-between p-3 w-8/12 m-auto">
        <Link
          className="border border-gray-300 bg-gray-100 rounded-lg px-5 py-3"
          to="/home"
        >
          Home
        </Link>
        <Link
          className="border border-gray-300 bg-gray-100 rounded-lg px-5 py-3"
          to="/about-us"
        >
          About us
        </Link>
        <Link
          className="border border-gray-300 bg-gray-100 rounded-lg px-5 py-3"
          to="/site-info"
        >
          Site info
        </Link>
      </div>
    </div>
  );
}

export default App;
