import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import S from "./styled";

function ContactSection(): JSX.Element {
  return (
    <S.ContactSectionWrapper>
      <S.ContactSectionContext>
        <S.ImageContainer>
          <div>
            <Title
              color={TitleColorsEnum.Primary}
              size='34px'
              weight="700"
            >
              Fale conosco
            </Title>
            <br />
            <br />
            <Paragraph
              color={ParagraphColorsEnum.Primary}
              size="16px"
              width="655px"
              span={{
                style: 'italic',
                color: '#5CAB9A',
              }}
            >
              Ligue para nós ou <span>solicite</span> uma visita a qualquer momento, esforçamo-nos por responder a todas as perguntas dentro de <span>24 horas</span> em dias úteis.
            </Paragraph>
          </div>
          <div>
            <img src="assets/images/svg/atendimento.svg" alt="" />
          </div>
        </S.ImageContainer>
        <S.FormContainer>
          <div>
            <Paragraph
              color={ParagraphColorsEnum.Light}
              size="16px"
            >
              ENTRAR EM CONTATO
            </Paragraph>
            <Paragraph
              color={ParagraphColorsEnum.Light}
              size="20px"
              span={{
                size: '32px',
                style: 'italic',
              }}
            >
              Pronto para <span>Começar?</span>
            </Paragraph>
          </div>
          <S.InputsContainer>
            <S.FormInput type="text" placeholder="Nome*"/>
            <S.FormInput type="email" placeholder="E-mail*"/>
            <S.FormInput type="tel" placeholder="Telefone*"/>
            <S.FormInput type="text" placeholder="Empresa*"/>
            <S.FormInputTextArea placeholder="Menssagem*"/>
            <S.FormInputSubmit type="submit" value="Enviar"/>
          </S.InputsContainer>
        </S.FormContainer>

      </S.ContactSectionContext>
    </S.ContactSectionWrapper>
  );
}

export default ContactSection;
