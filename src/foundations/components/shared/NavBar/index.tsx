import { useState } from "react"
import S from "./styled"


function NavBar() {
  const pags = ["Inicio", "Sobre", "Produtos", "Contato"]
  const [active, setActive] = useState('Inicio')

  function handleActive(active: string) {
    setActive(active)
  }

  return (
    <>
      <S.NavContainer>
        {pags.map((p) => <S.NavButtons href={'#' + p} onClick={() => { handleActive(p) }} isActive={active} name={p}>{p}</S.NavButtons>)}
      </S.NavContainer>
    </>
  )
}

export default NavBar