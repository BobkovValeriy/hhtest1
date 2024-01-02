import RightArrowSVG from "./image/RightArrowSVG";

function NavButton({
  img,
  clickedimg,
  textStyle = false,
  text,
  additionalText = false,
  additionalTextStyle = false,
  arrow = true,
  isClicked,
  click,
}) {
  return (
    <div
      onClick={click}
      className={isClicked ? "nav-button-clicked" : "nav-button"}
    >
      <div className="button-image">{isClicked ? clickedimg : img}</div>
      <div className={textStyle ? textStyle : "default-text__style"}>
        {text}
        {additionalText ? (
          <span style={additionalTextStyle ? additionalTextStyle : null}>
            {additionalText}
          </span>
        ) : null}
      </div>
      <div className="arrow-style">
        {arrow && <RightArrowSVG color={isClicked ? "#FFF" : "#9197B3"} />}
      </div>
    </div>
  );
}

export default NavButton;
