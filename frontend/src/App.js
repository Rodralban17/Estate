import logo from './logo.svg';
import './layout.scss';
import Navbar from './components/navbar/Navbar'
import Example from './test';
const App = () =>{
  return (
    <div className='layout'>
      <Navbar/>
      {/* <Example/> */}
    </div>
  );
}

export default App;
