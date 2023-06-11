import styled from "styled-components";

const Styleds = {
  ContactSectionWrapper: styled.section`
    width: 100%;
  `,
  ContactSectionContext: styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: row wrap;
  gap: 61px;
  padding: 100px 0;
  @media (max-width: 500px) {
    padding: 0;
  }
  `,
  ImageContainer: styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 500px) {
    display: none;
  }
  `,
  FormContainer: styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 13.0742px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.LightGreen};
  min-width: 300px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 30px 0 30px;
  @media (max-width: 500px) {
    width: 100%;
  }
  `,
  InputsContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  `,
  FormInput: styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 45px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.background.Light};
  color: ${({ theme }) => theme.colors.text.Secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .05);
  border: none;
  border-radius: 10px;
  outline: none;
  `,
  FormInputTextArea: styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 280px;
  height: 120px;
  padding: 10px;
  background: ${({ theme }) => theme.colors.background.Light};
  color: ${({ theme }) => theme.colors.text.Secondary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, .15);
  border: none;
  border-radius: 10px;
  outline: none;
  `,
  FormInputSubmit: styled.input`
  width: 94.79px;
  height: 42.53px;
  background: ${({ theme }) => theme.colors.LightOrange};
  color: ${({ theme }) => theme.colors.text.Light};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 6.5371px;
  border: none;
  cursor: pointer;
  &:hover{
    opacity: .8;
  }
  `,
};

export default Styleds;