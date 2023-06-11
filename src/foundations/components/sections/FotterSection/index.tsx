import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function FotterSection(): JSX.Element {
  return (
    <S.FotterSectionWrapper>
      <S.Content>

        <S.FotterContent>
          <div>
            <img src="assets/images/png/logo2.png" alt="logo" />
          </div>
          <div>
            <Title
              color={TitleColorsEnum.Light}
              size='24px'
              align="left"
            >
              Menu Alternativo
            </Title>
            <a href="#Inicio">Inicio</a>
            <a href="#Sobre">Sobre</a>
            <a href="#Produtos">Produtos</a>
          </div>
          <div>
            <Title
              color={TitleColorsEnum.Light}
              size='24px'
              align="left">
              Contato
            </Title>
            <a>Rua Maria José mahon santos - Macaé - RJ, 27946240</a>
            {/* <a>email@casaverde.com</a> */}
            <a href="https://wa.me/5522981596583" target='_blank'>(22) 98159-6583</a>
          </div>
          <div>
            <Title
              color={TitleColorsEnum.Light}
              size='24px'>
              Redes Sociais
            </Title>
            <div>
              <img src="assets/images/png/IGVector.png" />
              <a href="https://www.instagram.com/casaverdeconst/" target='_blank'>@casaverdeconst</a>
            </div>
            {/* <div>
              <img src="assets/images/png/LDVector.png" />
              <a href="" target='_blank'>/casaverde</a>
            </div> */}
          </div>
        </S.FotterContent>
        <S.FotterCopy>
          <Paragraph color={ParagraphColorsEnum.Light} size="18px">
            © 2023 CasaVerde. Todos os direitos reservados.
          </Paragraph>
          <Paragraph color={ParagraphColorsEnum.Secondary} size="13px">
            Design: <a href="https://www.instagram.com/matsudesignlab/" target="_blank">@matsudesignlab</a> |
            Desenvolvimento: <a href="https://www.instagram.com/dev.arthurs/" target="_blank">@dev.arthurs</a>
          </Paragraph>
        </S.FotterCopy>

      </S.Content>
    </S.FotterSectionWrapper>
  );
}

export default FotterSection;
