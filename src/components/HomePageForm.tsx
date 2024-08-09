import { useState } from "react";
import HomePageRadioInput from "./HomePageRadioInput";

function HomePageForm() {
  const [selectedOption, setSelectedOption] = useState("option1");
  return (
    <form>
      <HomePageRadioInput
        inputTitle={"option1"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
      <HomePageRadioInput
        inputTitle={"option2"}
        currentOption={selectedOption}
        changeSelected={setSelectedOption}
      />
    </form>
  );
}

export default HomePageForm;
