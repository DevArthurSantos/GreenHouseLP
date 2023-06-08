import { css } from "styled-components";

import { BreakpointProps } from "@infra/types/breakpointProps";

export default function Responsiveness(breakpoints: BreakpointProps[]) {
  return breakpoints.map(({ media, w, h, fz, otherCSS }) => {
    return css`
        @media (max-width: ${media}px) {
          ${otherCSS && `
          ${otherCSS.display && `display: ${otherCSS.display};`}
          ${otherCSS.alignItems && ` align-items: ${otherCSS.alignItems};`}
          ${otherCSS.justifyContent && `justify-content: ${otherCSS.justifyContent};`}
          ${otherCSS.flexFlow && `flex-flow: ${otherCSS.flexFlow};`}
          ${otherCSS.padding && `padding: ${otherCSS.padding};`}
          ${otherCSS.margin && `margin: ${otherCSS.margin};`}
          ${otherCSS.order && `order: ${otherCSS.order};`}
          `}
          ${w && `width: ${w};`}
          ${h && `height: ${h};`}
          ${fz && `font-size: ${fz};`}
        }
      `;
  });
}
