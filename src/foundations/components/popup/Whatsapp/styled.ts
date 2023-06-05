import { styled } from "styled-components";

const Styles = {
  WhatsappContainer: styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;

  position: absolute;
  width: 240px;
  height: 30px;
  bottom: 25px;
  right: 25px;

  background: ${({ theme }) => theme.colors.LightGreen};
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.06), 0px 2px 32px rgba(0, 0, 0, 0.16);
  border-radius: 50px;
  `,
}

export default Styles