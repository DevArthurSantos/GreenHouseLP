import NavBar from "@foundations/components/shared/NavBar";
import S from "./styled";

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.HeaderContext>
      <S.LogoContainer>
        <S.Image src="assets/images/png/logo.png" />
      </S.LogoContainer>
      <S.LogoContainer>
        <NavBar />
      </S.LogoContainer>
      </S.HeaderContext>
    </S.HeaderWrapper>
  );
}

export default Header;
