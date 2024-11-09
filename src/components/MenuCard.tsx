import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
import { useDispatch } from "react-redux";
import { openAlert } from "../appSlices/formSlice";
import { useCallback } from "react";

interface MenuCardProps {
  desNav: string;
  cardTitle: string;
}

function MenuCard(props: MenuCardProps) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("testJest");
  const formStateValues = useAppSelector((state) => state.formState);

  const onCardClick = useCallback(() => {
    if (Object.keys(formStateValues.dirtyFields).length === 0) {
      navigate(props.desNav);
    } else {
      dispatch(openAlert(props.desNav));
    }
  }, [formStateValues, props.desNav, navigate, dispatch]);

  return (
    <div
      data-testid="menu-card-div"
      className="menu-card clickable-text"
      onClick={onCardClick}
    >
      <p className="menu-card-text">{props.cardTitle}</p>
    </div>
  );
}

export default MenuCard;
