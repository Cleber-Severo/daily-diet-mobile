import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealsGetAll } from "./mealsGetAll";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { MealStorage } from "src/@types/meal";

export async function mealsDelete(id: string) {
  try {
    const currentMeals = (await mealsGetAll(true)) as MealStorage[];

    const newMealsList = currentMeals.filter((meal) => meal.id !== id);
    const storage = JSON.stringify(newMealsList);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (err) {
    console.log("🚀 ~ mealsDelete ~ err:", err);
    throw new Error();
  }
}
