import { useNavigate } from "react-router-dom";
import { clearDirtyFields, closeAlert } from "../appSlices/formSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./hooks";

function FormResetAlert(props: any) {
  const formStateValues = useAppSelector((state: any) => state.formState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onAlertOk() {
    dispatch(closeAlert(""));
    dispatch(clearDirtyFields(""));
    navigate(formStateValues.desURL);
  }

  function onAlertCancel() {
    dispatch(closeAlert(""));
    // props.setIsAlertOpen(false);
  }

  return (
    <div
      className={`full-screen-disable-div ${
        formStateValues.isAlertOpen ? "" : "div-close"
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