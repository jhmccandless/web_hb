import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";
import { useAppSelector } from "./hooks";

function AppLayout(props: any) {
  const dirtyFields = useAppSelector(
    (state: any) => state.formState.dirtyFields
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function onPageClick() {
    if (isMenuOpen) setIsMenuOpen(false);
  }

  function checkIfDirty(dfields: any): boolean {
    if (Object.entries(dfields).length === 0) return false;
    return true;
  }

  return (
    <div onClick={onPageClick} className="app-wrapper">
      <AppMenu menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <FormResetAlert
        openAlert={isAlertOpen}
        toggleAlertOpen={setIsAlertOpen}
      />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
