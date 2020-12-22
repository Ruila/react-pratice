import '../css/style.css';
import videoimg from '../images/c-mobile-tamou-logo-draw.jpg'

function player_block() {
  return (
    <div className="player-block">
        <div className="img">
            <img src={videoimg} alt="videoimg"/>
        </div>
        <div className="text">
            <span>videoName</span>
        </div>
    </div>
  );
}

export default player_block;
