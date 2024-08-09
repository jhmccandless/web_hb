import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";

function AppLayout(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);

  return (
    <div className="app-wrapper">
      <AppMenu menuOpen={isMenuOpen} />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
