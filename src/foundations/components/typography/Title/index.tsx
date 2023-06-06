import S from "./styled";

import { TitleProps } from "@infra/types/titleProps";

function Title({ children, color, span, size, width, align, weight }: TitleProps): JSX.Element {
  return (
    <S.TitleContainer width={width}>
      <S.Title color={color} span={span} size={size} align={align} weight={weight}>
        {children}
      </S.Title>
    </S.TitleContainer>
  );
}

export default Title;
