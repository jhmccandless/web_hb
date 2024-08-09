import { useNavigate } from "react-router-dom";

function MenuCard(props: any) {
  const navigate = useNavigate();

  function onCardClick() {
    console.log("card click");
    navigate(props.desNav);
  }

  return (
    <div className="menu-card clickable-text" onClick={onCardClick}>
      <p>{props.cardTitle}</p>
    </div>
  );
}

export default MenuCard;
