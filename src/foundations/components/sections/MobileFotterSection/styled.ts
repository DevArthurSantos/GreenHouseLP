import styled from "styled-components";

const Styleds = {
  MobileFotterSectionWrapper: styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.Light};
  border-top: 1px solid ${({ theme }) => theme.colors.text.Primary};
  padding-top: 25px;
  `,
  FotterContent: styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  width: 100%;
  gap: 25px;
  `,
  FotterContentLogo: styled.div`
  `,
  FotterContentRedes: styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  `,
  FotterCopy: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
  padding: 25px 0;
  & p {
    color: ${({ theme }) => theme.colors.text.Primary};
  }
  & a {
    color: ${({ theme }) => theme.colors.Green};
    opacity: .5;
  }
  `,
};

export default Styleds;