import { IMeal, MealStorage } from "src/@types/meal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storageConfig";
import { v4 as uuidv4 } from "uuid";
import { mealsGetAll } from "./mealsGetAll";

export async function measlEdit(meal: MealStorage) {
  console.log("aquiiii");
  try {
    const currentMeals = (await mealsGetAll(true)) as MealStorage[];

    const newList = currentMeals.filter((item) => item.id !== meal.id); // Isso retorna um array

    const storage = JSON.stringify([...newList, meal]);

    await AsyncStorage.setItem(MEALS_COLLECTION, storage);
  } catch (error) {
    console.log("🚀 ~ mealsCreate ~ error:", error);
    throw new Error("Erro ao salvar refeição.");
  }
}
