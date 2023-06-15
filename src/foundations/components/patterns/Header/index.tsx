import NavBar from "@foundations/components/shared/NavBar";
import S from "./styled";

function Header(): JSX.Element {
  return (
    <S.HeaderWrapper>
      <S.HeaderContext>
        <S.LogoContainer>
          <a href='#Inicio'>
            <S.Image src="assets/images/png/logo.png" />
          </a>
        </S.LogoContainer>
        <S.LogoContainer>
          <NavBar />
        </S.LogoContainer>
      </S.HeaderContext>
    </S.HeaderWrapper>
  );
}

export default Header;
