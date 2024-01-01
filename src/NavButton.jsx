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
  isClicked,
  click,
}) {
  return (
    <div
      onClick={click}
      className={isClicked ? "nav-button-clicked" : "nav-button"}
    >
      <div className="button-image">{img}</div>
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
