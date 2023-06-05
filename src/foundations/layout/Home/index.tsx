import S from "./styled"
import Header from "@foundations/components/patterns/Header";
import HomeSection from "@foundations/components/shared/HomeSection";
import AboutSection from "@foundations/components/shared/AboutSection";

function HomePageLayout(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <HomeSection />
      <AboutSection />
    </S.Container>
  );
}

export default HomePageLayout;
