import Responsiveness from "@infra/styles/Responsiveness";
import { css, styled } from "styled-components";
import NavBreakpoints from "./Breakpoints/NavBreakpoints";
import NavBTNBreakpoints from "./Breakpoints/NavBTNBreakpoints";

type isActive = {
  isactive: string
  name: string
}

const Styles = {
  NavContainer: styled.nav`
  display: flex;
  align-items: center;
  padding: 0px;
  gap: 25px;
  ${Responsiveness(NavBreakpoints)}
  `,
  Ul: styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  a {
    padding: 5px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.DarkGreen};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    a {
      font-size: 32px;
    }
  }
`,
  NavButtons: styled.a<isActive>`
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.Light};
  font-weight: 600;
  font-size: 14px;
  font-family: Montserrat;
  position: relative;
  ${Responsiveness(NavBTNBreakpoints)}
  ${({ theme, isActive, name }) => {
      if (isActive === name) {
        return css`
        color: ${theme.colors.LightOrange};
        &::before {
          content: "";
          width: 100%;
          height: 1.8px;
          position: absolute;
          bottom: 0;
          left: 0;
          background-color: ${theme.colors.LightOrange};
        }
      `
      }
    }}
`,
  StyledBurger: styled.div<{ open: boolean }>`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#ccc'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    z-index: 40;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`
}

export default Styles