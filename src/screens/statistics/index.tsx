import { Text, View } from "react-native";
import { Container, Icon, IconWrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Statistics() {
  const navigation = useNavigation();

  return (
    <Container>
      <IconWrapper onPress={() => navigation.navigate("home")}>
        <Icon type="SECONDARY" />
      </IconWrapper>
    </Container>
  );
}
