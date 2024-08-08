import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout(props: any) {
  return (
    <div className="app-wrapper">
      <Header />
      <div className="main">{props.desComp}</div>
      <Footer />
    </div>
  );
}

export default AppLayout;
