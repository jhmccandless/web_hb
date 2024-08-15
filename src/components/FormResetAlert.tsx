import { useState } from "react";
import { useAppSelector } from "./hooks";

function FormResetAlert(props: any) {
  function onAlertOk() {
    props.setIsAlertOpen(false);
  }

  function onAlertCancel() {
    props.setIsAlertOpen(false);
  }

  return (
    <div
      className={`full-screen-disable-div ${
        props.openAlert ? "" : "div-close"
      }`}
      // className={
      //   isAlertOpen
      //     ? "alert-location alert-popup"
      //     : "alert-location alert-popup-close"
      // }
    >
      <div className="alert-location alert-popup">
        <p>Form will be set, is that ok?</p>
        <button type="button" onClick={onAlertOk}>
          OK
        </button>
        <button type="button" onClick={onAlertCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default FormResetAlert;
