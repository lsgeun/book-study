import './App.css';
import Body from './component/Body';
import Footer from './component/Footer';
import Header from './component/Header';
import ChildComp from './component/ChildComp';

function App() {
  const BodyProps = {
    name: '이정환',
    location: '부천시',
    // favorList: ['파스타', '빵', '떡볶이'],
  };
  return (
    <div className='App'>
      <Header />
      <Body {...BodyProps}>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
