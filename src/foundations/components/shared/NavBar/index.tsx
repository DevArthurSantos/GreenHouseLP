import S from "./styled"


function NavBar(){
  const pags = ["Inicio", "Sobre-nós", "Produtos", "Contato"]

  return <S.NavContainer>{pags.map((p) => <S.NavButtons>{p}</S.NavButtons>)}</S.NavContainer>
}

export default NavBar