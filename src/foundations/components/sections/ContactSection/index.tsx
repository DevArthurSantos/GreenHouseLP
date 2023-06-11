import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import { useState } from "react";
import { init, send } from "@emailjs/browser"
import S from "./styled";

function ContactSection({ id }: { id: string }): JSX.Element {
  const [name, setName] = useState('');
  const [mailto, setMailto] = useState('');
  const [contact, setContact] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  async function sendEmail(e: any) {
    e.preventDefault();
  
    const nameRegex = /^[A-Za-z\s]+$/;
    const mailtoRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const contactRegex = /^\d{11}$/;
    const companyRegex = /^[A-Za-z\s]+$/;
  
    if (!nameRegex.test(name.trim())) {
      alert('Por favor, insira um nome válido');
      return;
    }
  
    if (!mailtoRegex.test(mailto.trim())) {
      alert('Por favor, insira um endereço de e-mail válido');
      return;
    }
  
    if (!contactRegex.test(contact.trim())) {
      alert('Por favor, insira um número de contato válido (11 dígitos numéricos)');
      return;
    }
  
    if (!companyRegex.test(company.trim())) {
      alert('Por favor, insira um nome de empresa válido');
      return;
    }
  
    const formData = {
      name: name.trim(),
      mailto: mailto.trim(),
      contact: contact.trim(),
      company: company.trim(),
      message
    };
  
    const sendEmail = await Promise.all([
      init('T5Bd_Euyyl0VIjCqM'),
      send('service_ei747ic', 'template_h361g9q', formData)
    ]);
  
    setName('')
    setMailto('')
    setContact('')
    setCompany('')
    setMessage('')
    alert('Envio realizado com sucesso!');
  }

  return (
    <S.ContactSectionWrapper id={id}>
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
                weight: 'bold'
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
            <S.FormInput type="text" placeholder="Nome*" value={name} onChange={(e) => setName(e.target.value)} />
            <S.FormInput type="email" placeholder="E-mail*" value={mailto} onChange={(e) => setMailto(e.target.value)} />
            <S.FormInput type="tel" placeholder="00 00000 0000*" value={contact} onChange={(e) => setContact(e.target.value)} />
            <S.FormInput type="text" placeholder="Empresa*" value={company} onChange={(e) => setCompany(e.target.value)} />
            <S.FormInputTextArea placeholder="Menssagem*" value={message} onChange={(e) => setMessage(e.target.value)} />
            <S.FormInputSubmit type="submit" value="Enviar" onClick={(e) => sendEmail(e)} />
          </S.InputsContainer>
        </S.FormContainer>

      </S.ContactSectionContext>
    </S.ContactSectionWrapper>
  );
}

export default ContactSection;
