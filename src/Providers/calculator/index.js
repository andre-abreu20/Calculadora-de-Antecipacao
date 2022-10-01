import { useContext } from "react";
import { createContext, useState } from "react";
import calculatorAPI from "../../services/api";

const CalculatorContext = createContext();

export function CalculatorProvider({ children }) {
  const [calculatorResult, setCalculatorResult] = useState("");

  function postCalcule(values) {
    calculatorAPI
      .post("/", values)
      .then((response) => {
        setCalculatorResult(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  return (
    <CalculatorContext.Provider value={{ postCalcule, calculatorResult }}>
      {children}
    </CalculatorContext.Provider>
  );
}

export const useCalculator = () => useContext(CalculatorContext);
