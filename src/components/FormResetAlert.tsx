import { useState } from "react";

function FormResetAlert() {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  function onAlertOk() {
    setIsAlertOpen(false);
  }

  function onAlertCancel() {
    setIsAlertOpen(false);
  }
  return (
    <div
      className={`full-screen-disable-div ${isAlertOpen ? "" : "div-close"}`}
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
