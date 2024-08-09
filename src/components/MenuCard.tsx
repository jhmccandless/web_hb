import { useNavigate } from "react-router-dom";

function MenuCard() {
  const navigate = useNavigate();

  function onCardClick() {
    console.log("card click");
  }

  return (
    <div className="menu-card" onClick={onCardClick}>
      <p>About</p>
    </div>
  );
}

export default MenuCard;
