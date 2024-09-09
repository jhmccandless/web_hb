interface AppMenuButtonProps {
  menuOpen: boolean;
  toggleButton: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppMenuButton(props: AppMenuButtonProps) {
  function onMenuClick() {
    props.toggleButton(!props.menuOpen);
  }

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
