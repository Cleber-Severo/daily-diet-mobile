import { ButtonIconTypeStyleProps } from "@screens/home/components/StatisticsBtn/styles";
import { ArrowLeftIcon } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.gray_700};
  flex: 1;
  padding: 24px;

  position: relative;
`;

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 0px;
  top: 10px;
`;

export const Icon = styled(ArrowLeftIcon).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  weight: "regular",
}))``;
