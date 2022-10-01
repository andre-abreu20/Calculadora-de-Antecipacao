import { CalculatorProvider } from "./calculator";

function Providers({ children }) {
  return <CalculatorProvider>{children}</CalculatorProvider>;
}

export default Providers;
