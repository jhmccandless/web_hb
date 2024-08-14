import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";

function AppLayout(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onPageClick() {
    if (isMenuOpen) setIsMenuOpen(false);
  }

  console.log(isMenuOpen);

  return (
    <div onClick={onPageClick} className="app-wrapper">
      <AppMenu menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <FormResetAlert />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
