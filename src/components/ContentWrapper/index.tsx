import { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export function ContentWrapper({ children }: Props) {
  return (
    <Container
      style={{
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 4, // Android shadow
      }}
    >
      {children}
    </Container>
  );
}
