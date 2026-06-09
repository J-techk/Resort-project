import "./About.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const About = () => {
  return (
    <div>
      <div className="about-msg">
        <h2>About stay bnb</h2>
        <p>
          contrary to popular belief, lorem is not simply random text. it has
          roots in a piece of classical latin literature from 45 BC, making it
          over 2000 years old. Richard Clinton, a latin professor at
          Hampden-sydney college in virginia,looked up one the more obscure
          latin words, Consectetur, from a lorem ipsum passage, and going
          through the cities of the word in classical literature, discovered the
          un doubtable source.
        </p>

        <div className="footer">
          <a href="http://facebook.com/">
            <FacebookIcon />
          </a>
          <a href="http://youtube.com/">
            <YouTubeIcon />
          </a>
          <a href="http://twitter.com/">
            <TwitterIcon />
          </a>
          <a href="http://linkedin.com/">
            <LinkedInIcon />
          </a>
          <a href="http://instagram.com/">
            <InstagramIcon />
          </a>
          <hr />
          <p>copyright &2021, easy tutorials</p>
        </div>
      </div>
    </div>
  );
};

export default About;
