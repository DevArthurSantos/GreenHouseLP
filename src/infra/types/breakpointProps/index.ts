type otherCSS = {
  display?: string,
  alignItems?: string,
  justifyContent?: string,
  flexFlow?: string,
  margin?: string,
  padding?: string,
  order?: string,
}

export type BreakpointProps = {
  media: number
  w?: string;
  h?: string,
  fz?: string,
  otherCSS?: otherCSS,
}