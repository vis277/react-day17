import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BeatLoader } from "react-spinners";
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const nagivate = useNavigate();
  const _handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      nagivate("/aboutDetails");
      setIsLoading(false);
    }, 5000);
  };
  return (
    <>
      <p>I am in Home</p>

      <Link to="/about">About</Link>
      <button onClick={_handleClick}>
        Go to about details {isLoading ? <BeatLoader /> : ""}
      </button>
    </>
  );
};

export default Home;
