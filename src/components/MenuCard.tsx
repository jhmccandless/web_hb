import { useNavigate } from "react-router-dom";

function MenuCard(props: any) {
  const navigate = useNavigate();

  function onCardClick() {
    navigate(props.desNav);
  }

  return (
    <div className="menu-card clickable-text" onClick={onCardClick}>
      <p className="menu-card-text">{props.cardTitle}</p>
    </div>
  );
}

export default MenuCard;
