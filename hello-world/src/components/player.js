import '../css/style.css';
import videoimg from '../images/c-mobile-tamou-logo-draw.jpg';
import Api from "../api/youtubeApi.js";

function player_block() {
  try 
  {
      //取得數據庫http://localhost:3003/posts的數據
      const Data =  Api.get(); 
      console.log(Data);
  } 
  catch (error) 
  {
      alert("GET Error!!");    
  } 
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
