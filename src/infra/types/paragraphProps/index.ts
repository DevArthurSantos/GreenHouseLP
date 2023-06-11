import { ReactNode } from "react"

import { ParagraphColorsEnum } from "@infra/enums/paragraphEnums"

export type ParagraphProps = {
  children: ReactNode
  color: ParagraphColorsEnum
  size?: string
  width?: string
  weight?: string
  align?: string
  span?: {
    size?: string,
    color?: string,
    style?: string,
    decoration?: string,
    weight?: string
  }
}

export type ParagraphContainProps = {
  width?: string
}