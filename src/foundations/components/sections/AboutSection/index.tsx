import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function AboutSection({ id }: { id: string }): JSX.Element {
  return (
    <S.AboutSectionWrapper id={id}>
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
            weight="400"
          >
            Somos líderes na fabricação de tijolos ecológicos, oferecendo soluções inovadoras para construções sustentáveis. Utilizamos técnicas responsáveis de produção e materiais de alta qualidade, reduzindo o impacto ambiental. Nossos tijolos são feitos com matérias-primas renováveis e recicladas, e são duráveis e eficientes.<br/><br/> Atendemos às demandas por sustentabilidade, contribuindo para um setor da construção mais consciente. Acreditamos na importância da construção sustentável para o futuro e estamos comprometidos com essa mudança positiva. Faça parte dessa jornada conosco, escolhendo nossos tijolos ecológicos. Juntos, podemos construir um mundo mais sustentável.
          </Paragraph>

        </S.TextContext>

      </S.AboutSectionContext>
    </S.AboutSectionWrapper>
  );
}

export default AboutSection;
