import { ReactNode } from "react";
import { Container, Title } from "./styles";

interface Props {
  title: string
  icon?: ReactNode
  onPressFn?: () => void
}

export function Button({ title, icon, onPressFn }: Props) {
  return (
    <Container onPress={onPressFn}>
      {icon && icon}
      <Title>{title}</Title>
    </Container>
  )
}