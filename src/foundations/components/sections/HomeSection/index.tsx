import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function HomeSection({ id }: { id: string }): JSX.Element {
  return (
    <S.HomeSectionWrapper id={id}>
      <S.HomeSectionContext>
        <Title color={TitleColorsEnum.Light} size="54px" width="1200px" weight="700">
          CONSTRUA A CASA DOS SEUS SONHOS COM TIJOLOS ECOLÓGICOS
        </Title>
        <Paragraph color={ParagraphColorsEnum.Light} size="22px" width="900px">
          Não perca tempo e solicite um orçamento agora mesmo para realizar o projeto dos seus sonhos com um desconto incrível de até 50% na sua concretização!
        </Paragraph>
        <S.SolicitarOrcamentoBTN href="https://wa.me/5522981596583" target='_blank'>
          Solicitar Orçamento
        </S.SolicitarOrcamentoBTN>
      </S.HomeSectionContext>
    </S.HomeSectionWrapper>
  );
}

export default HomeSection;


