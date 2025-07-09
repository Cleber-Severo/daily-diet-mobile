import { ButtonIconTypeStyleProps } from "@screens/home/components/StatisticsBtn/styles";
import { ArrowLeftIcon } from "phosphor-react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

type ContainerProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled(View)<ContainerProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};

  flex: 1;

  padding-top: 20px;
`;

type Props = {
  type: ButtonIconTypeStyleProps;
};

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 18px;
`;

export const Icon = styled(ArrowLeftIcon).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark,
  weight: "regular",
}))<Props>``;

type HeaderProps = {
  type: ButtonIconTypeStyleProps;
};

export const Header = styled.View<HeaderProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};

  padding: 38px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  position: relative;
`;
