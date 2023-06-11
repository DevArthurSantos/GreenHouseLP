import S from "./styled"
import Header from "@foundations/components/patterns/Header"
import HomeSection from "@foundations/components/sections/HomeSection";
import FotterSection from "@foundations/components/sections/FotterSection";
import ProductSection from "@foundations/components/sections/ProductSection";
import LinesSection from "@foundations/components/sections/LinesSection";
import FAQSection from "@foundations/components/sections/FAQSection";
import ContactSection from "@foundations/components/sections/ContactSection";
import AboutSection from "@foundations/components/sections/AboutSection";
import MobileFotterSection from "@foundations/components/sections/MobileFotterSection";

function HomePageLayout(): JSX.Element {
  return (
    <>
      <Header />
      <S.Container>
        <HomeSection id="Inicio" />
        <S.Padding>
          <AboutSection id="Sobre" />
          <ProductSection id="Produtos" />
        </S.Padding>
        <LinesSection />
        <S.Padding>
          <ContactSection id="Contato" />
        </S.Padding>
        {/* <FAQSection /> */}
        {/* <FotterSection /> */}
      </S.Container>
      <S.Hidden>
        <FotterSection />
      </S.Hidden>
      <S.Show>
        <MobileFotterSection />
      </S.Show>
    </>
  );
}

export default HomePageLayout;
