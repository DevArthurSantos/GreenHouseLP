import { ReactNode } from "react"
import { TitleColorsEnum } from "@infra/enums/titleEnums"

export type TitleProps = {
  children: ReactNode
  color: TitleColorsEnum
  size?: string
  width?: string
  align?: string
  weight?: string
  span?: {
    size?: string,
    color?: string,
    style?: string,
    decoration?: string,
  }
}

export type TitleContainProps = {
  width?: string
}