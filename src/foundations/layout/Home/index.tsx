import S from "./styled"
import Header from "@foundations/components/patterns/Header"
import HomeSection from "@foundations/components/sections/HomeSection";
import FotterSection from "@foundations/components/sections/FotterSection";
import ProductSection from "@foundations/components/sections/ProductSection";
import LinesSection from "@foundations/components/sections/LinesSection";
import FAQSection from "@foundations/components/sections/FAQSection";
import ContactSection from "@foundations/components/sections/ContactSection";
import AboutSection from "@foundations/components/sections/AboutSection";

function HomePageLayout(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <HomeSection />
      <AboutSection />
      <ProductSection />
      <LinesSection />
      {/* <ContactSection />
      <FAQSection /> */}
      <FotterSection />
    </S.Container>
  );
}

export default HomePageLayout;
