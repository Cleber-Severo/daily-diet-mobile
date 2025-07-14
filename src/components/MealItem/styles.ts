import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.gray_500};

  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 14px;
  margin-bottom: 10px;
`;

export const Hour = styled.Text``;
export const Divider = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_400};

  height: 80%;
  width: 2px;
`;
export const Name = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;

  color: ${({ theme }) => theme.COLORS.gray_200};
`;

interface Props {
  isOnDiet: boolean;
}

export const StatusIndicator = styled.View<Props>`
  border-radius: 50%;
  background-color: ${({ theme, isOnDiet }) => (isOnDiet ? theme.COLORS.green_mid : theme.COLORS.red_mid)};

  width: 14px;
  height: 14px;
`;
