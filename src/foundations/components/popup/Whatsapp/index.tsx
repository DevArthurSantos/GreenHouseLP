import { SiWhatsapp } from "react-icons/si"

import Paragraph from "@foundations/components/typography/Paragraph"
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums"
import S from "./styled"

function Whatsapp() {

  return (

    <>
      <S.WhatsappContainer href="https://wa.me/5581994920769" target='_blank'>
        <SiWhatsapp size={'18px'} color="#fcfcfc" />
        <div>
          <Paragraph color={ParagraphColorsEnum.Light} size="16px">
            Como posso ajudá-lo??
          </Paragraph>
        </div>
      </S.WhatsappContainer>
    </>

  )
}

export default Whatsapp