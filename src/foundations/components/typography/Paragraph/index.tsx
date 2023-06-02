import S from "./styled";
import { ParagraphProps } from "@infra/types/paragraphProps";

function Paragraph({ children, color, span }: ParagraphProps): JSX.Element {
  return (
    <S.ParagraphContainer>
      <S.Paragraph color={color} span={span}>
        {children}
      </S.Paragraph>
    </S.ParagraphContainer>
  );
}

export default Paragraph;
