import { ReactNode } from "react"

import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums"

export type ParagraphProps = {
  children: ReactNode
  color: ParagraphColorsEnum
  span?: {
    size?: string,
    color?: string,
    style?: string,
    decoration?: string,
  }
}