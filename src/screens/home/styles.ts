import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  gap: 24px;
`;

export const TextHome = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
