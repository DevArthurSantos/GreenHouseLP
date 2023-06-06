import styled from "styled-components";

const Styleds = {
  FotterSectionWrapper: styled.section`
  width: 100%;
  background: ${({ theme }) => theme.colors.Green};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 25px;
  gap: 25px;
  `,
  FotterContent: styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
  min-height: 100%;
  flex-flow: row wrap;
  & > div {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  gap: 25px;
  & > a {
    font-size: 16px;
    cursor: pointer;
    width: 240px;
    color: ${({ theme }) => theme.colors.text.Light};
  }
  }
  `,
  FotterCopy: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  width: 100%;
  gap: 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.text.Light};
  padding: 25px 0;
  & a, & p {
    color: ${({ theme }) => theme.colors.text.Light};
    opacity: .5;
  }
  `,
};

export default Styleds;