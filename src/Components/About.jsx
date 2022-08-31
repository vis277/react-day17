import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <p>I am in About</p>
      <Link to="/details?q=samsung"> samsung</Link>
      <br></br>
      <Link to="/details?q=poco"> Poco</Link>
      <br></br>
      <Link to="/details?q=mi"> Mi</Link>
    </>
  );
};

export default About;
