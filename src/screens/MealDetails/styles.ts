import styled from "styled-components/native";
import { Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { ArrowLeftIcon, PencilSimpleLine, Trash } from "phosphor-react-native";
import { ButtonIconTypeStyleProps } from "@screens/home/components/StatisticsBtn/styles";

type ContainerProps = {
  type: ButtonIconTypeStyleProps;
};

export const Container = styled.View<ContainerProps>`
  flex: 1;
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};
  padding-top: 24px;
`;

export const Header = styled.View<ContainerProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_light : theme.COLORS.red_light)};
  padding: 24px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
`;

export const ContentWrapper = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const ContentScroll = styled(ScrollView)`
  flex: 1;
`;

export const DetailContainer = styled.View`
  padding: 40px 24px;
`;

export const StatusLabelWrapper = styled.View`
  margin-top: 24px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 20px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-top: 4px;
`;

export const TimeLabel = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
  margin-top: 24px;
`;

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  margin-top: 4px;
`;

export const Actions = styled.View`
  gap: 10px;
  padding: 24px;
`;

export const EditBtn = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 16px;
`;

export const EditTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.white};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;
export const DeleteTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 14px;
`;

export const DeleteBtn = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.white};
  border: 1px solid ${({ theme }) => theme.COLORS.gray_200};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;

  padding: 16px;
`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.white,
  weight: "regular",
}))``;

export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.gray_200,
  weight: "regular",
}))``;

export const IconWrapper = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 24px;
`;

export const Icon = styled(ArrowLeftIcon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.gray_100,
  weight: "regular",
}))``;
