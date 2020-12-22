import '../css/style.css';
import PlayerBlock from './player.js'
import Btn from './button.js'
function videoBoard() {
  return (
    <div>
        <Btn />
      <div className="video-board">
         <PlayerBlock />
      </div>
    </div>
   
  );
}

export default videoBoard;
