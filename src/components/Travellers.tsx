import image1 from "../assets/images/story-1.png";
import image2 from "../assets/images/story-2.png";
import image3 from "../assets/images/story-3.png";
import "./Travellers.css";
const Travellers = () => {
  return (
    <div>
      <div className="container">
        <h2 className="sub-title">Travellers Stories</h2>
        <div className="images">
          <div className="stories">
            <img src={image1} />
            <p>Popular European countries with budget of just $10,000</p>
          </div>
          <div className="stories">
            <img src={image2} />
            <p>Travelled more than 100 countries in less than a year</p>
          </div>
          <div className="stories">
            <img src={image3} />
            <p>Best experience you get while travelling to thailand</p>
          </div>
        </div>
        <a href="#" className="start-btn">
          Start making money
        </a>
      </div>
    </div>
  );
};

export default Travellers;
