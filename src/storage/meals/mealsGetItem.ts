import { MealStorage } from "src/@types/meal";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsGetItem(mealId: string) {
  try {
    const currentMeals = (await mealsGetAll(true)) as MealStorage[];

    const foundItem = currentMeals.find((item) => item.id === mealId);

    if (!foundItem) {
      throw new Error("Meal not found");
    }

    if (!foundItem) {
      throw new Error("Meal not found inside date group");
    }

    return foundItem;
  } catch (error) {
    console.error("Failed to fetch meal:", error);
    throw error;
  }
}
