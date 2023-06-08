import { BreakpointProps } from "@infra/types/breakpointProps";

export default [
  {
    media: 1030,
  },
  {
    media: 770,
  },
  {
    media: 560,
    otherCSS: {
      display: 'none'
    }
  },
  {
    media: 320,
  }
] as BreakpointProps[]