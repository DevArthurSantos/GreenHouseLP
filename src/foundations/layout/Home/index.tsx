import S from "./styled"
import Header from "@foundations/components/patterns/Header";
import HomeSection from "@foundations/components/shared/HomeSection";

function HomePageLayout(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <HomeSection />
    </S.Container>
  );
}

export default HomePageLayout;
