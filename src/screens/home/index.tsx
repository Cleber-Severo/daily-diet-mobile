import { Text, View } from "react-native";
import { Container, TextHome } from "./styles";
import Header from "./components/Header";
import StatisticsBtn from "./components/StatisticsBtn";

export function Home() {
  return (
    <Container>
      <Header />

      <StatisticsBtn />
    </Container>
  );
}
