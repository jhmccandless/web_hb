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
      <MenuCard cardTitle={"Home"} desNav={"/"} />
      {/* <MenuCard cardTitle={"Workout Input"} desNav={"/form"} /> */}
      <MenuCard cardTitle={"About"} desNav={"/about"} />
    </div>
  );
}

export default AppMenu;
