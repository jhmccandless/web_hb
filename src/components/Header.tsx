import { useNavigate } from "react-router-dom";
import AppMenuButton from "./AppMenuButton";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../hooks/hooks";
import { openAlert } from "../appSlices/formSlice";

interface HeaderProps {
  menuOpen: boolean;
  toggleButton: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header(props: HeaderProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formStateValues = useAppSelector((state) => state.formState);

  function onAppTitleClick() {
    if (Object.keys(formStateValues.dirtyFields).length === 0) {
      navigate("/");
    } else {
      dispatch(openAlert("/"));
    }
  }
  return (
    <div data-testid="header-1" className="header">
      <p
        data-testid="headerTitle-1"
        className="clickable-text application-title"
        onClick={onAppTitleClick}
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
