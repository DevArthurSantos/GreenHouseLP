import styled from "styled-components";

const Styleds = {
  Container: styled.div`
  max-width: 1920px;
  margin: 0 auto;
  `,
  Padding: styled.section`
  @media (max-width: 500px) {
        padding: 25px;
    }
  `,
  Hidden: styled.div`
    display: block;
    @media (max-width: 500px) {
      display: none; 
    }
  `,
  Show: styled.div`
    display: none;
    @media (max-width: 500px) {
      display: block;
    }
  `
};

export default Styleds;
