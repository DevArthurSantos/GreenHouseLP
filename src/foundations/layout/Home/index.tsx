import S from "./styled"
import Header from "@foundations/components/patterns/Header";
import HomeSection from "@foundations/components/shared/HomeSection";
import Whatsapp from "@foundations/components/popup/Whatsapp";

function HomePageLayout(): JSX.Element {
  return (
    <S.Container>
      <Header />
      <HomeSection />
      <Whatsapp />
    </S.Container>
  );
}

export default HomePageLayout;
