import logo from './logo.svg';
import './layout.scss';
import Navbar from './components/navbar/Navbar'
import Example from './test';
import HomePage from './pages/homePage';
const App = () =>{
  return (
    <div className='layout'>
      <div className='navbar'>
        <Navbar/>
      </div>
      
      <div className='content'>
      <HomePage/>
      </div>
    </div>
  );
}

export default App;
