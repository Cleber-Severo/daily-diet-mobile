import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from "@expo-google-fonts/nunito-sans";
import { Routes } from "@routes/index";
import { StatusBar, Text } from "react-native";
import theme from "src/theme";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="transparent" translucent />
      {fontsLoaded ? <Routes /> : <Text>Carregando...</Text>}
    </ThemeProvider>
  );
}
