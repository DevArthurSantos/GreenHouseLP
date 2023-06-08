import Paragraph from "@foundations/components/typography/Paragraph";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import S from "./styled";

function MobileFotterSection(): JSX.Element {
  return (
    <S.MobileFotterSectionWrapper>
      <S.FotterContent>
        <S.FotterContentLogo>
          <img src="assets/images/png/logo.png"/>
        </S.FotterContentLogo>
        
        <S.FotterContentRedes>
          <img src="assets/images/png/IGVector.png"  />
          <img src="assets/images/png/LDVector.png"  />
        </S.FotterContentRedes>
      </S.FotterContent>
      <S.FotterCopy>
        <Paragraph color={ParagraphColorsEnum.Light} size="12px">
          © 2023 CasaVerde. Todos os direitos reservados.
        </Paragraph>
        <Paragraph color={ParagraphColorsEnum.Secondary} size="8px">
          Desenvolvimento: <a href="https://www.instagram.com/dev.arthurs/" target="_blank">@dev.arthurs</a>
          <br />
          Design: <a href="https://www.instagram.com/matsudesignlab/" target="_blank">@matsudesignlab</a>
        </Paragraph>
      </S.FotterCopy>
    </S.MobileFotterSectionWrapper>
  );
}

export default MobileFotterSection;
