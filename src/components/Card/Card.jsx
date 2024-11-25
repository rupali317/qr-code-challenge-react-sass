import React from "react";

export const Card = () => (
  <div className="card">
    <img
      src="../images/qr-code.png"
      alt="Qr code for front end mentor challenge"
      aria-describedby="qr-code-instructions"
      width="288"
      height="288"
    />
    <h1>Improve your front-end skills by building projects</h1>
    <p id="qr-code-instructions">
      Scan the QR code to visit Frontend Mentor and take your coding skills to
      the next level
    </p>
  </div>
);
