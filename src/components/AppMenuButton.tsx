import { useState } from "react";

function AppMenuButton() {
  const [menuOpen, setMenuOpen] = useState(false);
  function onMenuClick() {
    // console.log("click");
    setMenuOpen(!menuOpen);
  }

  // console.log(menuOpen);

  return (
    <div style={{ gridColumn: "5 / span 1" }} onClick={onMenuClick}>
      <p style={{ alignItems: "right" }}>Menu</p>
    </div>
  );
}

export default AppMenuButton;
