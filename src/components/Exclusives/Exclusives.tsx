import "./Exclusives.css";
import image1 from "../../assets/images/image-1.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import image4 from "../../assets/images/image-4.png";
import image5 from "../../assets/images/image-5.png";
import image6 from "../../assets/images/image-6.png";
import image7 from "../../assets/images/image-7.png";
import image8 from "../../assets/images/image-8.png";
import image9 from "../../assets/images/image-9.png";
import image10 from "../../assets/images/image-10.png";
import dubai from "../../assets/images/dubai.png";
import newYork from "../../assets/images/new-york.png";
import paris from "../../assets/images/paris.png";
import newDelhi from "../../assets/images/new-delhi.png";

const Exclusives = () => {
  return (
    <div>
      <div className="container">
        <h2 className="sub-title">Exclusives</h2>
        <div className="exclusives">
          <div>
            <img src={image1} />
            <span>
              <h3>London</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image2} />
            <span>
              <h3>Switzerland</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image3} />
            <span>
              <h3>Australia</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image4} />
            <span>
              <h3>France</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image5} />
            <span>
              <h3>Armsterdom</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image6} />
            <span>
              <h3>Netherlands</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image7} />
            <span>
              <h3>New York</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image8} />
            <span>
              <h3>Chicago</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image9} />
            <span>
              <h3>San Francisco</h3>
              <p>starts @ $250</p>
            </span>
          </div>
          <div>
            <img src={image10} />
            <span>
              <h3>Shanghai</h3>
              <p>starts @ $250</p>
            </span>
          </div>
        </div>
        <h2 className="sub-title">Trending Places</h2>
        <div className="trending">
          <div>
            <img src={dubai} />
            <h3>Dubai</h3>
          </div>
          <div>
            <img src={newYork} />
            <h3>New York</h3>
          </div>
          <div>
            <img src={paris} />
            <h3>Paris</h3>
          </div>
          <div>
            <img src={newDelhi} />
            <h3>New Delhi</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusives;
