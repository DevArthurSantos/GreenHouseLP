import Paragraph from "@foundations/components/typography/Paragraph"
import Title from "@foundations/components/typography/Title"
import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums"
import { TitleColorsEnum } from "@infra/enums/titleEnums"
import { ReactElement, ReactNode } from "react"
import S from "./styled"


type ProductLineCardProps = {
  children: ReactNode,
  image: string,
  CardTitle: string
}

function ProductLineCard({ children, image, CardTitle }: ProductLineCardProps) {

  return (
    <>
      <S.ProductLineCardContainer>
        <S.Image src={image} alt={CardTitle} />
        <Title color={TitleColorsEnum.LaranjaDark}
          size="30px"
          weight="700"
        >
          {CardTitle}
        </Title>
        <div>
          <Paragraph color={ParagraphColorsEnum.Secondary}
            size="20px"
            span={{
              color: "#834B14",
              weight: "600"
            }}
          >
            {children}
          </Paragraph>
        </div>
      </S.ProductLineCardContainer>
    </>

  )
}

export default ProductLineCard