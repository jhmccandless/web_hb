import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { openAlert } from "../appSlices/formSlice";

interface MenuCardProps {
  desNav: string;
  cardTitle: string;
}

function MenuCard(props: MenuCardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formStateValues = useAppSelector((state) => state.formState);

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
