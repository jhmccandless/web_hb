import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";
import FormResetAlert from "./FormResetAlert";

function AppLayout(props: any) {
  // const dispatch = useAppDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /*
  const formStateValues = useAppSelector((state: any) => state.formState);
  This is for the refresh functionality
  useEffect(() => {
    if (Object.keys(formStateValues.dirtyFields).length !== 0) {
      const handleBeforeUnload = (e: any) => {
        e.preventDefault();
      };
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  });
  */

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
