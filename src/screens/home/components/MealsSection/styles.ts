import { Pressable, SectionList } from "react-native";
import { MealStorage } from "src/@types/meal";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.gray_100};

  margin-bottom: 8px;
`;

export type Meal = {
  mealId: string;
  hour: string;
  name: string;
  description: string;
  isOnDiet: boolean;
};

type MealSection = {
  date: string;
  data: MealStorage[];
};

export const MealsList = styled(SectionList<MealStorage, MealSection>).attrs({
  contentContainerStyle: {
    paddingBottom: 24,
  },
})`
  margin-top: 32px;
`;

export const MealHeader = styled.Text`
  color: ${({ theme }) => theme.COLORS.gray_100};

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;

  margin-bottom: 6px;
`;
