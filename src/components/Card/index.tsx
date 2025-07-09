import { CardColors, Container, Description, MainText } from "./styles";

interface Props {
  amount: number;
  description: string;
  type?: CardColors;
}

export function Card({ type = "DEFAULT", amount, description }: Props) {
  return (
    <Container type={type}>
      <MainText>{amount}</MainText>
      <Description>{description}</Description>
    </Container>
  );
}
