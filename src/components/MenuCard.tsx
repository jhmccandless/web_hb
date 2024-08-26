import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { openAlert } from "../appSlices/formSlice";

function MenuCard(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formStateValues = useAppSelector((state: any) => state.formState);

  function onCardClick() {
    if (Object.keys(formStateValues.dirtyFields).length === 0) {
      navigate(props.desNav);
    } else {
      dispatch(openAlert(props.desNav));
    }
  }

  return (
    <div className="menu-card clickable-text" onClick={onCardClick}>
      <p className="menu-card-text">{props.cardTitle}</p>
    </div>
  );
}

export default MenuCard;
