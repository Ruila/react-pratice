import logo from './logo.svg';
import './App.css';
import Loading from './components/loading.js'
import PlayerBoard from './components/videoBoard.js'
function App() {
  return (
    <div className="App">
      <PlayerBoard/>
        {/* <Loading /> */}
    </div>
  );
}

export default App;
