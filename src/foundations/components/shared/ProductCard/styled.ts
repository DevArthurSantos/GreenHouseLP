import { styled } from "styled-components";

const Styles = {
  ProductCardContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 578px;
  max-height: 196px;
  `,
  TitleContainer: styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  `,
  IconContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.LightOrange};
  padding: 10px;
  border-radius: 50%;
  `,
  TextContainer: styled.div`
  text-align: left;
  padding-left: 60px;
  p {
    line-height: 30px;
  }
  `,
}

export default Styles