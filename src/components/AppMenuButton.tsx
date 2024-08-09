function AppMenuButton(props: any) {
  function onMenuClick() {
    console.log("click");
    props.toggleButton(!props.menuOpen);
  }

  // console.log(menuOpen);

  return (
    <div
      className="clickable-text"
      style={{ gridColumn: "5 / span 1" }}
      onClick={onMenuClick}
    >
      <p style={{ alignItems: "right" }}>Menu</p>
    </div>
  );
}

export default AppMenuButton;
