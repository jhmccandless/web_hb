import { useNavigate } from "react-router-dom";
import AppMenuButton from "./AppMenuButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/hooks";
import { openAlert } from "../appSlices/formSlice";

function Header(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formStateValues = useAppSelector((state: any) => state.formState);

  function onAppTitleClick() {
    if (Object.keys(formStateValues.dirtyFields).length === 0) {
      navigate("/");
    } else {
      dispatch(openAlert("/"));
    }
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
