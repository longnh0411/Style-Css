import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValid = userInput.duration > 0 ? true : false;

  function onChangeValue(inputName, value) {
    setUserInput((curentValue) => {
      return {
        ...curentValue,
        [inputName]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeValue={onChangeValue}/>
      {isValid === false && <p className="center">{"Duration must be" + " > " + "0"}</p>}
      {isValid === true && <Result userInput={userInput}/>}
    </>
  );
}

export default App;
