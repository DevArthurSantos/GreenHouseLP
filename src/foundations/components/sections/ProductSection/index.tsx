import ProductCard from "@foundations/components/shared/ProductCard";
import Paragraph from "@foundations/components/typography/Paragraph";
import Title from "@foundations/components/typography/Title";
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums";
import { TitleColorsEnum } from "@infra/enums/titleEnums";
import { GiCash,GiCrenulatedShield } from 'react-icons/gi'
import { MdOutlineAvTimer } from 'react-icons/md'
import { TbTemperatureCelsius } from 'react-icons/tb'
import S from "./styled";

function ProductSection(): JSX.Element {
  return (
    <S.ProductSectionWrapper>
      <S.ProductSectionContext>
        <S.TitleContainer>
          <Title
            color={TitleColorsEnum.Primary}
            weight='700'
          >
            Nosso Produto
          </Title>
          <Paragraph
            color={ParagraphColorsEnum.Primary}
            span={{
              color: '#5CAB9A',
              style: 'italic',
            }}
          >
            Saiba mais sobre as vantagens  dos <span>Tijolos Ecológicos.</span>
          </Paragraph>
        </S.TitleContainer>
        <S.CardsContainer>
          <div>
            <ProductCard
              icon={<GiCash size='25px' color='#fff' />}
              CardTitle='Economia'
            >
              Uma construção com tijolo ecológico chega a economizar cerca de 80% em cimento, 50% em ferro e até 100% na madeira utilizada como forma de pilares.
            </ProductCard>
            <ProductCard
              icon={<GiCrenulatedShield size='25px' color='#fff' />}
              CardTitle='Durabilidade'
            >
              Os tijolos ecológicos são mais resistentes do que os convencionais, quebrando menos durante a execução da obra. Gerando uma boa  economia financeira.
            </ProductCard>
          </div>
          <div>
            <ProductCard
              icon={<TbTemperatureCelsius size='25px' color='#fff' />}
              CardTitle='Conforto térmico'
            >
              Os tijolos ecológicos possuem um ótimo sistema de conforto térmico, mantendo a temperatura no interior da residência sempre agradável, faça frio ou faça calor.
            </ProductCard>
            <ProductCard
              icon={<MdOutlineAvTimer size='25px' color='#fff' />}
              CardTitle='Velocidade'
            >
              Uma construção feita com tijolo ecológico é muito mais rápida do que uma construção de alvenaria tradicional.
            </ProductCard>
          </div>
        </S.CardsContainer>
      </S.ProductSectionContext>
    </S.ProductSectionWrapper>
  );
}

export default ProductSection;
