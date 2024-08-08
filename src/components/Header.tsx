import AppMenuButton from "./AppMenuButton";

function Header() {
  return (
    <div className="header">
      <p style={{ gridColumn: "1 / span 2" }}>Hangboarding</p>
      <AppMenuButton />
    </div>
  );
}

export default Header;
