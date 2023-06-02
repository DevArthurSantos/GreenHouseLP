import Paragraph from "@foundations/components/typography/Paragraph";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import S from "./styled";

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.TitleContainer>
        <S.HeaderTitle>Boilerplate</S.HeaderTitle>
        <Paragraph
          color={ParagraphColorsEnum.Secondary}
          span={{
            color: "red",
            style: "italic;",
            decoration: "underline blue",
            size: "50px"
          }}
        >
          React + Vite + axios + Styled-Components
          <br />
          <br />
          <span>texto espan</span>
        </Paragraph>
      </S.TitleContainer>
      <div>
        <S.HeaderTitle>Arthur Santos</S.HeaderTitle>
      </div>
    </S.HeaderWrapper>
  );
}

export default Header;
