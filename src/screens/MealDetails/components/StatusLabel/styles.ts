import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.gray_600};
  border-radius: 1000px;

  flex-direction: row;
  align-items: center;
  gap: 6px;
  align-self: flex-start;

  padding: 8px 16px;
  margin-top: 24px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};
  /* font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR}; */
  font-size: 14px;
`;

interface BulletProps {
  type: "PRIMARY" | "SECONDARY";
}

export const Bullet = styled.View<BulletProps>`
  background-color: ${({ theme, type }) => (type === "PRIMARY" ? theme.COLORS.green_dark : theme.COLORS.red_dark)};

  border-radius: 100%;
  width: 8px;
  height: 8px;
`;
