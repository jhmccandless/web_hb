import { useNavigate } from "react-router-dom";
import { clearDirtyFields } from "../appSlices/formSlice";
import { useDispatch } from "react-redux";

function FormResetAlert(props: any) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function onAlertOk() {
    props.setIsAlertOpen(false);
    dispatch(clearDirtyFields(""));
    navigate(props.pageNavTo);
  }

  function onAlertCancel() {
    props.setIsAlertOpen(false);
  }

  return (
    <div
      className={`full-screen-disable-div ${
        props.isAlertOpen ? "" : "div-close"
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
