import styled from "styled-components";

export const BackGroundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0d4;
  width: 100%;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 65%;
  max-width: 1000px;
  height: 600px;
  background-color: #e9e9e994;
  border-radius: 8px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border-top: #008ef4 1px solid;
  border-left: #008ef4 1px solid;
  border-bottom: #008ef4 1px solid;
  padding: 60px;
  background-color: #fff;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #3c3c3c;
  }

  button {
    width: 175px;
    height: 45px;
    margin-top: 30px;
    border-radius: 100px;
    border: 1px solid #fff;
    font-size: 1.3rem;
    font-weight: bolder;
    color: #fff;
    background-color: #008ef4;
    animation-fill-mode: backwards;
    cursor: pointer;
    :hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    :active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  align-items: left;
  width: 30%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top: #008ef4 1px solid;
  border-right: #008ef4 1px solid;
  border-bottom: #008ef4 1px solid;
  font-style: italic;
  h2 {
    margin-top: 100px;
    color: #008ef4;
    font-size: 1.3rem;
    font-weight: bold;
    padding-bottom: 8px;
    border-bottom: #6cc1ff 0.5px solid;
    text-align: left;
  }
  p {
    margin-top: 50px;
    font-size: 1.1rem;
    color: #3194dc;
  }
  span {
    color: #008ef4;
    font-size: 1rem;
    font-weight: bolder;
  }
`;
