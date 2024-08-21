import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";
import { useAppSelector } from "./hooks";

function AppLayout(props: any) {
  const formStateValues = useAppSelector((state: any) => state.formState);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [canAlertOpen, setCanAlertOpen] = useState(
    Object.keys(formStateValues.dirtyFields).length !== 0
  );
  const [formAlertURL, setFormAlertURL] = useState("/");

  function onPageClick() {
    if (isMenuOpen) setIsMenuOpen(false);
  }

  return (
    <div onClick={onPageClick} className="app-wrapper">
      <FormResetAlert
      // isAlertOpen={isAlertOpen}
      // setIsAlertOpen={setIsAlertOpen}
      // pageNavTo={formAlertURL}
      />
      <AppMenu menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
