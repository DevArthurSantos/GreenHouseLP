import React, { useState } from 'react';
import S from "./styled"

type RightNavProps = {
  open: boolean,
  setOpen(): void
}

const RightNav = ({ open, setOpen }: RightNavProps) => {
  const pags = ["Inicio", "Sobre", "Produtos", "Contato"]
  const [active, setActive] = useState('Inicio')

  function handleActive(active: string) {
    setActive(active)
    setOpen()
  }
  return (
    <S.Ul open={open}>
      {pags.map((p) => <S.NavButtons key={`id:${p}`} href={'#' + p} onClick={() => { handleActive(p) }} isactive={active} name={p}>{p}</S.NavButtons>)}
    </S.Ul>
  )
}

export default RightNav