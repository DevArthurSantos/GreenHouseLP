import { useState } from "react"
import RightNav from "./RightNav"
import S from "./styled"


function NavBar() {
  const pags = ["Inicio", "Sobre", "Produtos", "Contato"]
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('Inicio')

  function handleActive(active: string) {
    setActive(active)
  }

  return (
    <>
      <S.StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </S.StyledBurger>
      <RightNav open={open} setOpen={() => setOpen(!open)} />
    </>
  )
}

export default NavBar