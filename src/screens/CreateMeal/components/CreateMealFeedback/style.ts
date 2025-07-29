import { SafeAreaView, View } from "react-native";
import styled from "styled-components/native";

export type StatusType = "onDiet" | "offDiet";

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.gray_700};

  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;

  padding: 24px 32px;
`;

interface PropsTitle {
  status: StatusType;
}

export const Title = styled.Text<PropsTitle>`
  color: ${({ theme, status }) => (status === "offDiet" ? theme.COLORS.red_dark : theme.COLORS.green_dark)};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};

  text-align: center;
`;

export const FeedBackImg = styled.Image`
  margin-top: 50px;
  margin-bottom: 24px;
`;

export const ButtonContainer = styled.View`
  width: 60%;
`;
