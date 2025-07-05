export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      createMeal: undefined;
      createMealFeedback: {
        status: "onDiet" | "offDiet";
      };
      meal: {
        mealName: string;
      };
    }
  }
}
