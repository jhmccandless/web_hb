import MenuCard from "./MenuCard";

function AppMenu(props: any) {
  function onMenuSelectClick() {
    props.toggleButton(false);
  }
  return (
    <div
      onClick={onMenuSelectClick}
      className={`${props.menuOpen ? "menu" : "menu-close"}`}
    >
      <MenuCard cardTitle={"Workout Input"} desNav={"/"} />
      <MenuCard cardTitle={"About"} desNav={"/about"} />
    </div>
  );
}

export default AppMenu;
