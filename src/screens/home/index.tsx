import { Container } from "./styles";
import Header from "./components/Header";
import StatisticsBtn from "./components/StatisticsBtn";
import { MealsSection } from "./components/MealsSection";


export function Home() {
  return (
    <Container>
      <Header />

      <StatisticsBtn />

      <MealsSection />
    </Container>
  );
}
