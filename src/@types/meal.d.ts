export interface IMeal {
  name: string;
  description: string;
  date: string;
  time: string;
  isOnDiet: boolean;
}

export interface MealStorage {
  id: string;
  hour: string;
  name: string;
  description: string;
  isOnDiet: boolean;
  date?: string;
}

export interface MealListStorage {
  date: string;
  data: MealStorage[];
}

export interface MealSection extends SectionListData<Meal> {
  date: string;
  data: MealStorage[];
}
