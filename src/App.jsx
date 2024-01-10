import { useState } from "react";
import Button from "./components/Button";
import ButtonOp from "./components/ButtonOp";
import Screen from "./components/Screen";
import "./styles/global.css";
import "./styles/button.css";
import "./styles/screen.css";
import "./styles/mainCalc.css";
import "./styles/buttons.css";
import "./styles/operators.css";
import "./styles/numbers.css";
import { numberButtons, operatorButtons } from "./utils/constants";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("");
  const [prevScreen, setPrevscreen] = useState("");
  const [todoOp, setTodoOp] = useState("");

  function changeTodoOp(val) {
    setTodoOp(val);
    setPrevscreen(currentScreen);
    setCurrentScreen("");
  }
  function equalHandler() {
    if (todoOp == "+") {
      const result = Number(prevScreen) + Number(currentScreen) + "";
      setCurrentScreen(result);
    }
  }

  function changeScreenVal(val) {
    setCurrentScreen(currentScreen + val);
  }
  return (
    <div className="mainCalc">
      <Screen value={currentScreen} />
      <div className="buttons">
        <div className="numbers">
          {numberButtons.map((val, index) => {
            return (
              <Button
                key={index}
                value={val}
                changeScreenVal={changeScreenVal}
              />
            );
          })}
        </div>
        <div className="operators">
          {operatorButtons.map((val, index) => {
            return (
              <ButtonOp key={index} value={val} changeTodoOp={changeTodoOp} />
            );
          })}
        </div>
        <div>
          <button className="btn" onClick={equalHandler}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}
