import { styled } from "styled-components";

const Styles = {
  NavContainer: styled.nav`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 25px;
  `,
  NavButtons: styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.Light};
  font-weight: 600;
  font-size: 14px;
  font-family: Montserrat;
  `
}

export default Styles