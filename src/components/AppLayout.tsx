import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import AppMenu from "./AppMenu";

function AppLayout(props: any) {
  return (
    <div className="app-wrapper">
      <AppMenu />
      <Header />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
