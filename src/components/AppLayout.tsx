import React from "react";

function AppLayout(props: any) {
  return (
    <div className="app-wrapper">
      <div className="header">
        <p>header</p>
      </div>
      <div className="main">{props.desComp}</div>
      <div className="footer">
        <p>footer</p>
      </div>
    </div>
  );
}

export default AppLayout;
