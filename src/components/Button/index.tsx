import { ReactNode } from "react";
import { Container, Title } from "./styles";

export type VariantBtnProps = 'FILLED' | 'OUTLINED'

interface Props {
  title: string
  icon?: ReactNode
  onPressFn?: () => void
  variant?: VariantBtnProps
  stretch?: boolean
  customWidth?: string
}

export function Button({ title, icon, onPressFn, variant = 'FILLED', stretch = false, customWidth }: Props) {
  return (
    <Container onPress={onPressFn} variant={variant} stretch={stretch} customWidth={customWidth}>
      {icon && icon}
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}