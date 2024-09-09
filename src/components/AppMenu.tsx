import MenuCard from "./MenuCard";

interface AppMenuProps {
  menuOpen: boolean;
}

function AppMenu(props: AppMenuProps) {
  return (
    <div className={`${props.menuOpen ? "menu" : "menu-close"}`}>
      <MenuCard cardTitle={"Home"} desNav={"/"} />
      {/* <MenuCard cardTitle={"Workout Input"} desNav={"/form"} /> */}
      <MenuCard cardTitle={"About"} desNav={"/about"} />
    </div>
  );
}

export default AppMenu;
