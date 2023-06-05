import NavBar from "@foundations/components/shared/NavBar";
import Paragraph from "@foundations/components/typography/Paragraph";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import S from "./styled";

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.HeaderContext>

      <S.LogoContainer>
        <img src="assets/images/png/logo.png" />
      </S.LogoContainer>
      <S.LogoContainer>
        <NavBar />
      </S.LogoContainer>
      </S.HeaderContext>
    </S.HeaderWrapper>
  );
}

export default Header;
