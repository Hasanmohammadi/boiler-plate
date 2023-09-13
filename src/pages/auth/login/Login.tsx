import Body from './body/Body';
import ChangeStyleBox from './changeStyleBox/ChangeStyleBox';
import Header from './header/Header';

export default function Login() {
  return (
    <div
      className="w-screen h-screen relative mb-48"
      // style={{ direction: 'rtl' }}
    >
      <Header />
      <Body />
      <ChangeStyleBox />
    </div>
  );
}
