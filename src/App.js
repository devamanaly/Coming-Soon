import logo from './logo.svg';
import './App.css';
import Text from './animation/Text';
import Pic from './pic/techjourneyer_72218_i_need_a_logo_on_SummitByte_109d8cb7-bbb4-496f-9e7c-e1355c7eae6d.webp'
function App() {
  return (
    <div className="App" >
      <div className='header'>
      {/* <div className='log'>

        <img src={Pic} alt="" />
        </div>   */}

        <p className='logo'>
          SummitByte

        </p>

      </div>

<div className='main'>

      <div className='content' >
        <h2>
        Get Ready! Our Website is Coming Soon!
        </h2>

        {/* <Text/> */}
        <p className='txt'>
          We're working hard behind the scenes to bring you an amazing online experience. Our website is under construction, but we promise it will be worth the wait!
        </p>

      </div>
      </div>

    </div>
  );
}

export default App;
