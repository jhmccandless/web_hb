import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";
import { useAppSelector } from "./hooks";

function AppLayout(props: any) {
  // const dispatch = useAppDispatch();

  const formStateValues = useAppSelector((state: any) => state.formState);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(formStateValues.dirtyFields).length !== 0) {
      const handleBeforeUnload = (e: any) => {
        e.preventDefault();

        // dispatch(openAlert("/"));
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  });

  function onPageClick() {
    if (isMenuOpen) setIsMenuOpen(false);
  }

  return (
    <div onClick={onPageClick} className="app-wrapper">
      <FormResetAlert />
      <AppMenu menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <Header menuOpen={isMenuOpen} toggleButton={setIsMenuOpen} />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
