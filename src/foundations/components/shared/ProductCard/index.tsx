import Paragraph from "@foundations/components/typography/Paragraph"
import Title from "@foundations/components/typography/Title"
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums"
import { TitleColorsEnum } from "@infra/enums/titleEnums"
import { ReactElement, ReactNode } from "react"
import S from "./styled"


type ProductCardProps = {
  children: ReactNode,
  icon: ReactElement,
  CardTitle: string
}

function ProductCard({ children, icon, CardTitle }: ProductCardProps) {

  return (
    <>
      <S.ProductCardContainer>
        <S.TitleContainer>
          <S.IconContainer>
            {icon}
          </S.IconContainer>
          <Title color={TitleColorsEnum.Primary}
            size="24px"
            weight="700"
            align="left"
          >
            {CardTitle}
          </Title>
        </S.TitleContainer>
        <S.TextContainer>
          <Paragraph color={ParagraphColorsEnum.Primary}
            size="20px"
            weight="400"
            align="left"
          >
            {children}
          </Paragraph>
        </S.TextContainer>
      </S.ProductCardContainer>
    </>

  )
}

export default ProductCard