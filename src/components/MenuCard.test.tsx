import { fireEvent, render, screen } from "@testing-library/react";
import MenuCard from "./MenuCard";
import { useNavigate } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { configureStore, createReducer } from "@reduxjs/toolkit";

jest.mock("react-router-dom");

const mockStore1 = configureStore({
  reducer: createReducer(
    {
      formState: {
        dirtyFields: {},
      },
    },
    () => {}
  ),
});
const mockStore2 = configureStore({
  reducer: createReducer(
    {
      formState: {
        dirtyFields: { isDirty: true, dirtyField1: 123 },
      },
    },
    () => {}
  ),
});

describe("MenuCard", () => {
  it("should call navigate", () => {
    const mockNavigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    render(
      <Provider store={mockStore1}>
        <MenuCard desNav={"testdesnev"} cardTitle={"testcardtitle"} />
      </Provider>
    );
    const menuCardElement = screen.getByTestId("menu-card-div");
    // menuCardElement.click();
    fireEvent.click(menuCardElement);
    expect(mockNavigate).toHaveBeenCalledWith("testdesnev");
  });

  it("should call dispatch", () => {
    render(
      <Provider store={mockStore2}>
        <MenuCard desNav={"testdesnev"} cardTitle={"testcardtitle"} />
      </Provider>
    );
  });
});

// for clicks, you have .click()- more user oriented or fireEvent() - faster because "dumb"

//tohavebeencalled vs tohavebeencalledwith
//...with to have those props with it

// mockimplementation changes the implementation of the funcion, runs function

//mockreturnvalue returns the value we assigned the function in the code

//look up mock reducers or mock stores from redux
