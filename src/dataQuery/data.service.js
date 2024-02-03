import { useQuery } from "@tanstack/react-query";
import {
  getBrands,
  getCategories,
  getNews,
  getPartners,
  getSingleProduct,
  getSubCategories,
} from "./data.fn";

export const useCategories = () =>
  useQuery({ queryFn: getCategories, queryKey: ["categoryKey"] });

export const useSubCategories = (id) =>
  useQuery({
    queryFn: () => getSubCategories(id),
    queryKey: ["subCategoryKey"],
  });

export const useBrands = (params) =>
  useQuery({ queryFn: () => getBrands(params), queryKey: ["brands"] });

export const useSingleProduct = (id) =>
  useQuery({
    queryFn: () => getSingleProduct(id),
    queryKey: ["singleProduct"],
    enabled: !!id,
  });

export const useNews = (params) =>
  useQuery({ queryFn: () => getNews(params), queryKey: ["news"] });
  
export const usePartners = (params) =>
useQuery({ queryFn: () => getPartners(params), queryKey: ["partner"] });
