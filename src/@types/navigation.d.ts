export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      createMeal: undefined;
      mealForm: {
        situation: "create" | "edit";
        mealId: string;
      };
      meal: {
        mealId: string;
      };
      createMealFeedback: {
        status: "onDiet" | "offDiet";
      };
    }
  }
}
