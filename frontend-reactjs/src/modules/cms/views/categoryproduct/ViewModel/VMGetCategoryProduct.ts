import axios from "axios";
import { useEffect, useState } from "react";
import {
  GetCategoryProductAllInterface,
  GetCategoryProductDetailInterface,
} from "../Interface/InterfaceCategoryProduct";

function VMGetCategoryProduct() {
  const [categories, setCategories] = useState<
    GetCategoryProductAllInterface[]
  >([]);
  const [getcategoryDetail, setCategoryDetail] =
    useState<GetCategoryProductDetailInterface | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [showModalViewDetailCategory, setShowModalViewDetailCategory] =
    useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/categoryproduct/get"
        );

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setCategories(formattedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const getCategoryByID = async (categoryId: number) => {
    try {
      setCategoryId(categoryId);
      const response = await fetch(
        `http://localhost:3000/categoryproduct/get/${categoryId}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch category detail");
      }
      const data: {
        name: string;
        image: string;
        createdAt: string;
        updatedAt: string;
      } = await response.json();
      setCategoryDetail(data);
      setShowModalViewDetailCategory(true);
    } catch (error) {
      console.error("Error fetching category detail:", error);
    }
  };

  const imageSrc = "http://localhost:3000/category";
  return {
    categories,
    setCategories,
    getCategoryByID,
    showModalViewDetailCategory,
    getcategoryDetail,
    imageSrc,
    setShowModalViewDetailCategory,
    categoryId
  };
}

export default VMGetCategoryProduct;
