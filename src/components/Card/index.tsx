import { CardColors, Container, Description, MainText } from "./styles";

interface Props {
  mainText: string;
  description: string;
  type: CardColors;
}

export function Card({ type = "DEFAULT", mainText, description }: Props) {
  return (
    <Container type={type}>
      <MainText>{mainText}</MainText>
      <Description>{description}</Description>
    </Container>
  );
}
