import MenuCard from "./MenuCard";

function AppMenu(props: any) {
  return (
    <div className={`${props.menuOpen ? "menu" : "menu-close"}`}>
      <MenuCard
        cardTitle={"Home"}
        desNav={"/"}
        toggleButton={props.toggleButton}
      />
      {/* <MenuCard cardTitle={"Workout Input"} desNav={"/form"} /> */}
      <MenuCard
        cardTitle={"About"}
        desNav={"/about"}
        toggleButton={props.toggleButton}
      />
    </div>
  );
}

export default AppMenu;
