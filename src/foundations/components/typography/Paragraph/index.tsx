import S from "./styled";
import { ParagraphProps } from "@infra/types/paragraphProps"; 

function Paragraph({ children, color, span, size, width  }: ParagraphProps): JSX.Element {
  return (
    <S.ParagraphContainer width={width}>
      <S.Paragraph color={color} span={span} size={size}>
        {children}
      </S.Paragraph>
    </S.ParagraphContainer>
  );
}

export default Paragraph;
