import Input from "../Input";
import {
  BackGroundContainer,
  Container,
  ResultsContainer,
  StyledForm,
} from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCalculator } from "../../Providers/calculator";

function Calculator() {
  const { calculatorResult, postCalcule } = useCalculator();

  const schema = yup.object().shape({
    amount: yup
      .number()
      .typeError("")
      .required("* Campo obrigatorio.")
      .positive("Precisa ser um numero positivo.")
      .min(1000, "Minimo de R$1000."),
    installments: yup
      .number()
      .typeError("")
      .required("* Campo obrigatorio!.")
      .min(1, "Minimo de 1 parcela.")
      .max(12, "Maximo de 12 parcelas."),
    mdr: yup
      .number()
      .typeError("")
      .required("* Campo obrigatorio.")
      .min(0, "Minimo 0")
      .max(100, "Maximo 100"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    nativeValidation: false,
    resolver: yupResolver(schema),
  });

  const handleCalculator = (data) => {
    const dataWithDays = { ...data, days: [1, 15, 30, 90] };
    postCalcule(dataWithDays);
  };

  return (
    <BackGroundContainer>
      <Container>
        <StyledForm type="submit" onSubmit={handleSubmit(handleCalculator)}>
          <h2>Simule sua Antecipacao</h2>
          <Input
            description="Informe o valor da venda *"
            type="number"
            name="amount"
            error={errors.amount?.message}
            register={register}
          />
          <Input
            description="Em quantas parcelas *"
            type="number"
            name="installments"
            error={errors.installments?.message}
            register={register}
          />
          <Input
            description="Informe o percentual de MDR"
            type="number"
            name="mdr"
            error={errors.mdr?.message}
            register={register}
          />
          <button type="submit">Simular</button>
        </StyledForm>
        <ResultsContainer>
          <h2>VOCE RECEBERA:</h2>
          <p>
            Amanha:{" "}
            <span>
              R${" "}
              {!!calculatorResult[1] ? calculatorResult[1].toFixed(2) : "00,00"}
            </span>
          </p>
          <p>
            Em 15 dias:{" "}
            <span>
              R${" "}
              {!!calculatorResult[15]
                ? calculatorResult[15].toFixed(2)
                : "00,00"}
            </span>
          </p>
          <p>
            Em 30 dias:{" "}
            <span>
              R${" "}
              {!!calculatorResult[30]
                ? calculatorResult[30].toFixed(2)
                : "00,00"}
            </span>
          </p>
          <p>
            Em 90 dias:{" "}
            <span>
              R${" "}
              {!!calculatorResult[90]
                ? calculatorResult[90].toFixed(2)
                : "00,00"}
            </span>
          </p>
        </ResultsContainer>
      </Container>
    </BackGroundContainer>
  );
}

export default Calculator;
