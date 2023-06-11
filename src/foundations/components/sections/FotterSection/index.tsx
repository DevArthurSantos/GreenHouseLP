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
            <a>Home</a>
            <a>Produtos</a>
            <a>FAQ</a>
            <a>Política de Privacidade</a>
          </div>
          <div>
            <Title
              color={TitleColorsEnum.Light}
              size='24px'
              align="left">
              Contato
            </Title>
            <a>Rua Maria José mahon santos - Macaé - RJ, 27946240</a>
            <a>email@casaverde.com</a>
            <a>(22) 98147-3329</a>
          </div>
          <div>
            <Title
              color={TitleColorsEnum.Light}
              size='24px'>
              Redes Sociais
            </Title>
            <a>@casaverde</a>
            <a>/casaverde</a>
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
