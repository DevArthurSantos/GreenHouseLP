import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function AboutSection(): JSX.Element {
  return (
    <S.AboutSectionWrapper>
      <S.AboutSectionContext>
        <S.ImageContainer>
          <S.Image src="assets/images/png/aboutImage.png" />
        </S.ImageContainer>

        <S.TextContext>
          <Title
            color={TitleColorsEnum.Primary}
            weight='700'
            span={{
              size: '22px',
              color: '#5CAB9A',
              style: 'italic'
            }}
          >
            <span>Quem Somos</span>
          </Title>
          <Title
            color={TitleColorsEnum.Primary}
            weight='700'
          >
            Soluções Ecoamigáveis para Durabilidade
          </Title>
          <Paragraph
            color={ParagraphColorsEnum.Primary}
            align="left"
          >
            Somos líderes na fabricação de tijolos ecológicos, oferecendo soluções inovadoras para construções sustentáveis. Combinamos técnicas responsáveis de produção e materiais de alta qualidade, liderando a transformação para um setor da construção mais consciente. e a produção e materiais de alta qualidade. Atendemos às demandas por sustentabilidade, eficiência e redução de impacto ambiental.
          </Paragraph>
          <Paragraph
            color={ParagraphColorsEnum.Primary}
            align="left"
          >
            Somos líderes na fabricação de tijolos ecológicos, oferecendo soluções inovadoras para construções sustentáveis. Combinamos técnicas responsáveis de produção e materiais de alta qualidade, liderando a transformação para um setor da construção mais consciente. e a produção e materiais de alta qualidade. Atendemos às demandas por sustentabilidade, eficiência e redução de impacto ambiental.
          </Paragraph>
        </S.TextContext>

      </S.AboutSectionContext>
    </S.AboutSectionWrapper>
  );
}

export default AboutSection;
