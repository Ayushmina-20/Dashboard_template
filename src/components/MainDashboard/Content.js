import react from "react";
import "../styles/Content.css";
export default function Content() {
  return (
    <div className="Main_Content">
      <div className="Navbar">
        <div className="Nav_Body">
          <div className="Left">
            <img src={require("./img/image 2.png").default} />
            <img src={require("./img/CoE logo 1.png").default} />
          </div>
          <div className="Right">
            <a className="Nav_menu">Home</a>
            <a className="Nav_menu">About</a>
            <a className="Nav_menu">News</a>
            <a className="Nav_menu">Contact</a>
          </div>
        </div>
      </div>
      <div className="Banner_image"></div>
      <div className="News_Sentiment">
        <div className="News_Box">
          <div className="lefter">
            <img src={require("./img/NewspaperClipping.png").default}></img>
          </div>
          <div className="righter">
            <div className="righter-text">
              <div className="info">NewsToday</div>
              <div className="heading"> 250+</div>
            </div>
          </div>
        </div>
        <div className="News_Box">
          <div className="lefter">
            <img src={require("./img/NewspaperClipping.png").default}></img>
          </div>
          <div className="righter">
            <div className="righter-text">
              <div className="info">NewsToday</div>
              <div className="heading"> 250+</div>
            </div>
          </div>
        </div>
        <div className="News_Box">
          <div className="lefter">
            <img src={require("./img/NewspaperClipping.png").default}></img>
          </div>
          <div className="righter">
            <div className="righter-text">
              <div className="info">NewsToday</div>
              <div className="heading"> 250+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
