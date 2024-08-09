import AppMenuButton from "./AppMenuButton";

function Header(props: any) {
  return (
    <div className="header">
      <p style={{ gridColumn: "1 / span 2" }}>Hangboarding</p>
      <AppMenuButton
        menuOpen={props.menuOpen}
        toggleButton={props.toggleButton}
      />
    </div>
  );
}

export default Header;
