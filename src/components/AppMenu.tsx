import MenuCard from "./MenuCard";

function AppMenu(props: any) {
  return (
    <div className={`${props.menuOpen ? "menu" : "menu-close"}`}>
      <MenuCard />
    </div>
  );
}

export default AppMenu;
