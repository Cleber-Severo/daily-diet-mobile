import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  gap: 12px;
  padding: 24px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  text-align: center;

  font-size: 14px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

  margin: 10px 0;
`;

export const CardWrapper = styled.View`
  flex: 1;
`;

export const MealSplitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`;
