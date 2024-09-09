import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";

interface AppLayoutProps {
  desComp: React.ReactNode;
}

function AppLayout(props: AppLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onPageClick() {
    if (isMenuOpen) setIsMenuOpen(false);
  }

  return (
    <div onClick={onPageClick} className="app-wrapper">
      <FormResetAlert />
      <AppMenu menuOpen={isMenuOpen} />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
