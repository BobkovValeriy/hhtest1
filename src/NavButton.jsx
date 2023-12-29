import React, { useState } from "react";
import RightArrowSVG from "./image/RightArrowSVG";

function NavButton({
  img,
  text,
  additionalText = false,
  arrow = true,
  functionToLoadData = false,
}) {
  const [clicked, setClicked] = useState(false);

  function NavButtonClicked() {
    setClicked(!clicked);
    if (functionToLoadData) functionToLoadData();
  }

  return (
    <div
      onClick={NavButtonClicked}
      className={clicked ? "nav-button-clicked" : "nav-button"}
    >
      {img}
      <div>{text}</div>
      {additionalText ? additionalText : null}
      {arrow && <RightArrowSVG />}
    </div>
  );
}

export default NavButton;
