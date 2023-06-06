import { LoadingStatus, useFetch } from "./useFetch";

type CategoriesResponse = [string[] | null, LoadingStatus, Error | null];

export const useCategories = (): CategoriesResponse => {
    const { data: categories, status, error } = useFetch<string[]>('https://dummyjson.com/products/categories');

    return [categories, status, error]
}