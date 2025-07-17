import { Bullet, Container, Label } from "./styles";

interface Props {
  type: 'PRIMARY' | 'SECONDARY'
}

export function StatusLabel({ type }: Props) {
  return (
    <Container>
      <Bullet type={type} />

      <Label>
        {type === "PRIMARY" ? 'dentro da dieta' : 'fora da dieta'}
      </Label>
    </Container>
  )
}