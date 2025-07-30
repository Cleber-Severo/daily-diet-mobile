import { mealsGetAll } from "./mealsGetAll";

export async function mealsGetItem(mealId: string) {
  try {
    const mealsData = await mealsGetAll();

    const foundItem = mealsData.find((item) => item.data.some((meal) => meal.id === mealId));

    if (!foundItem) {
      throw new Error("Meal not found");
    }

    const foundMeal = foundItem.data.find((meal) => meal.id === mealId);

    if (!foundMeal) {
      throw new Error("Meal not found inside date group");
    }

    return { ...foundMeal, date: foundItem.date };
  } catch (error) {
    console.error("Failed to fetch meal:", error);
    throw error;
  }
}
