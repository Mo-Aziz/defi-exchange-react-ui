import React from "react";
import "./SignUpStyles.css";
import CryptoImage from "../../assets/trade.png";

const SingUp = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={CryptoImage} alt="" />
        </div>
        {/* right */}
        <div className="right">
          <h2>Earn passive income with yield farming</h2>
          <p>Earn up to 80% annual rewards on all digital assets.</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
