import Responsiveness from "@infra/styles/Responsiveness";
import { css, styled } from "styled-components";
import NavBreakpoints from "./Breakpoints/NavBreakpoints";
import NavBTNBreakpoints from "./Breakpoints/NavBTNBreakpoints";

type isActive = {
  isActive: string
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
          width: 115%;
          height: 1.8px;
          position: absolute;
          margin-left: -5%;
          margin-bottom: -5px;
          bottom: 0;
          left: 0;
          background-color: ${theme.colors.LightOrange};
        }
      `
      }
    }}
`
}

export default Styles