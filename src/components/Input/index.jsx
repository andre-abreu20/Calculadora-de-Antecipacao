import { StyledInput, StyledLabel, Container } from "./styles";

function Input({ description, error, type, register, name }) {
  return (
    <Container>
      <StyledLabel>{description}</StyledLabel>
      {!!error && <span>{error}</span>}
      <StyledInput type={type} {...register(name)} />
    </Container>
  );
}
export default Input;
