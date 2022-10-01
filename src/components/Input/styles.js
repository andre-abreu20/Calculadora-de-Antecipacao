import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 5px 10px 5px 10px;
  width: 100%;
  border: #008ef4 1px solid;
  border-radius: 8px;
  outline: none;
  height: 40px;
  transition: transform 0.5s;

  :focus {
    outline: 2px solid var(--primary);
  }
`;

export const StyledLabel = styled.label`
  color: #000;
  transition: 0.5s;
  margin-bottom: 10px;
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  height: 60px;
  margin-top: 15px;

  span {
    color: #979696;
    font-size: 0.9rem;
  }

  :hover {
    input {
      transform: scale(1.05);
    }

    label {
      transform: translateX(15px);
      color: black;
    }
  }
`;
