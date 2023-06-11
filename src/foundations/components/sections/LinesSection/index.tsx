import ProductLineCard from "@foundations/components/shared/ProductLineCard";
import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function LinesSection(): JSX.Element {
  return (
    <S.LinesSectionWrapper>
      <S.LinesSectionContext>
        <div>
          <Title color={TitleColorsEnum.Light} size="54px" weight="700">
            Nossa linha de Blocos Ecológicos
          </Title>
        </div>
        <S.LinesCardsContainer>
          <ProductLineCard
            CardTitle="Tijolo Padrão"
            image='assets/images/png/tijoloPadrão.png'
          >
            vergas, contra-vergas,
            passagem horizontal de tubos e
            conduítes.
            <br/><span>Dimensões</span><br/>
            12,5 x 25 x 6,25
            e
            15 x 30 x 7,50
          </ProductLineCard>
          <ProductLineCard
            CardTitle="Tijolo Canaleta"
            image='assets/images/png/tijoloCanaleta.png'
          >
            vergas, contra-vergas, passagem horizontal de tubos e conduítes.
            <br/><span>Dimensões</span><br/>
            12,5 x 25 x 6,25
            e
            15 x 30 x 7,50
          </ProductLineCard>
          <ProductLineCard
            CardTitle="Meio Padrão"
            image='assets/images/png/meioTijolo.png'
          >
            São usados nos remates das portas, janelas e paredes.
            <br/><span>Dimensões</span><br/>
            12,5 x 12,5 x 6,25
            e
            15 x 15 x 7,50
          </ProductLineCard>
        </S.LinesCardsContainer>

      </S.LinesSectionContext>
    </S.LinesSectionWrapper>
  );
}

export default LinesSection;
