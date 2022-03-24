import './App.css';
import Price from './components/Price';
import Topbar from './components/Topbar';
import Welcompage from './components/Welcompage';

function App() {
  return (
    <div className="App">
     <Topbar />
     <Welcompage />
     <Price />
    </div>
  );
}

export default App;
