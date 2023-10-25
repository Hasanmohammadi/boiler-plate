import 'flag-icons/css/flag-icons.min.css';
import { SiteInformation } from 'pages';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';

function App() {
  return (
    <div className="flex flex-row bg-cyan-900 h-full min-h-screen">
      <SiteInformation />
    </div>
  );
}

export default App;
