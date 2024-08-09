import { useNavigate } from "react-router-dom";
import AppMenuButton from "./AppMenuButton";

function Header(props: any) {
  const navigate = useNavigate();
  function onAppTitleClick() {
    navigate("/");
  }
  return (
    <div className="header">
      <p
        className="clickable-text"
        onClick={onAppTitleClick}
        style={{ gridColumn: "1 / span 2" }}
      >
        Hangboarding
      </p>
      <AppMenuButton
        menuOpen={props.menuOpen}
        toggleButton={props.toggleButton}
      />
    </div>
  );
}

export default Header;
