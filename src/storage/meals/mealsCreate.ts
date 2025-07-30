import { IMeal } from "src/@types/meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { v4 as uuidv4 } from "uuid";
import { mealsGetAll } from "./mealsGetAll";

export async function mealsCreate(meal: IMeal) {
  try {
    const mealStorage = await mealsGetAll();

    const newMeal = {
      id: uuidv4(),
      hour: meal.time,
      name: meal.name,
      description: meal.description,
      isOnDiet: meal.isOnDiet,
    };

    const existingMealIndex = mealStorage.findIndex((item) => item.date === meal.date);

    if (existingMealIndex >= 0) {
      mealStorage[existingMealIndex].data.push(newMeal);
    } else {
      mealStorage.push({
        date: meal.date,
        data: [newMeal],
      });
    }

    const storage = JSON.stringify(mealStorage);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    console.log("🚀 ~ mealsCreate ~ error:", error);
    throw new Error("Erro ao salvar refeição.");
  }
}
