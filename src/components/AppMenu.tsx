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
      <MenuCard cardTitle={"About"} desNav={"/about"} />
      <MenuCard cardTitle={"Workout Input"} desNav={"/"} />
    </div>
  );
}

export default AppMenu;
