import styled from "styled-components";

const Styleds = {
  AboutSectionWrapper: styled.section`
    width: 100%;
    margin: 100px 0;
  `,
  AboutSectionContext: styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: row wrap;
  `,
  TextContext: styled.div`
  width: 552px;
  height: 513px;
  background: 'red';
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  gap: 15px;
  `,
  ImageContainer: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 552px;
  height: 513px;
  `,
  Image: styled.img`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  `
};

export default Styleds;