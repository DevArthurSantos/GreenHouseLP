import { styled } from "styled-components";

const Styles = {
  ProductLineCardContainer: styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  max-width: 300px;
  height: 465px;
  background: ${({ theme }) => theme.colors.background.Light};
  box-shadow: 0px 4px 31px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  gap: 25px;
  & > div{
    padding: 0 30px;
  }
  `,
  Image: styled.img`
  width: 110%;
  `,
}

export default Styles