import { fireEvent, render, screen } from "@testing-library/react";
import MenuCard from "./MenuCard";
import { useNavigate } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import { formSlice } from "../appSlices/formSlice";
import { initialState } from "../appSlices/timerSlice";

jest.mock("react-router-dom");
const mockNavigate = jest.fn();

const mockStore = configureStore({
  reducer: createReducer(
    {
      formState: {
        dirtyFields: false,
      },
    },
    () => {}
  ),
});

// const mockStore = configureStore({
//   reducer: { formSlice: formStateObj },
// });

// const mockStore = createStore(
//   createReducer(),
//   { formState: {dirtyFields: { isTest: true } } },
// });
// const mockNavigate = jest.fn();

describe("MenuCard", () => {
  it("should call navigate", () => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    render(
      <Provider store={mockStore}>
        <MenuCard desNav={"testdesnev"} cardTitle={"testcardtitle"} />
      </Provider>
    );
    const menuCardElement = screen.getByTestId("menu-card-div");
    // menuCardElement.click();
    fireEvent.click(menuCardElement);
    expect(mockNavigate).toHaveBeenCalledWith("testdesnev");
  });
});

// for clicks, you have .click()- more user oriented or fireEvent() - faster because "dumb"

//tohavebeencalled vs tohavebeencalledwith
//...with to have those props with it

// mockimplementation changes the implementation of the funcion, runs function

//mockreturnvalue returns the value we assigned the function in the code

//look up mock reducers or mock stores from redux
