import React, { useEffect, useState } from "react";
import RightArrowSVG from "./image/RightArrowSVG";

function NavButton({
  img,
  textStyle = false,
  text,
  additionalText = false,
  additionalTextStyle = false,
  arrow = true,
  functionToLoadData = false,
  turnOn = false,
}) {
  const [clicked, setClicked] = useState(false);

  function NavButtonClicked() {
    setClicked(!clicked);
    if (functionToLoadData) functionToLoadData();
  }
  // useEffect(() => {
  //   if (turnOn) {
  //     NavButtonClicked();
  //   }
  // }, []);

  return (
    <div
      onClick={NavButtonClicked}
      className={clicked ? "nav-button-clicked" : "nav-button"}
    >
      {img}
      <div className={textStyle ? textStyle : "default-text__style"}>
        {text}
        {additionalText ? (
          <span style={additionalTextStyle ? additionalTextStyle : null}>
            {additionalText}
          </span>
        ) : null}
      </div>
      <div className="arrow-style">{arrow && <RightArrowSVG />}</div>
    </div>
  );
}

export default NavButton;
