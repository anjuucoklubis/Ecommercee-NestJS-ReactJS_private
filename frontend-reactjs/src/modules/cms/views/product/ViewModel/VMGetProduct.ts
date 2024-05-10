import axios from "axios";
import { useEffect, useState } from "react";
import {
  GetAllProductInterface,
  GetDetailProductInterface,
} from "../Interface/InterfaceProduct";

function VMGetProduct() {
  const [product, setProduct] = useState<GetAllProductInterface[]>([]);
  const [getproductDetail, setGetproductDetail] =
    useState<GetDetailProductInterface | null>(null);
  const [productId, setProductId] = useState<number | null>(null);
  const [showModalViewDetailProduct, setShowModalViewDetailProduct] =
    useState(false);
  const [combinedDate, setCombinedDate] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/product/get");

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setProduct(formattedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const getProductByID = async (productId: number) => {
    try {
      setProductId(productId);
      const response = await fetch(
        `http://localhost:3000/product/get/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch product detail");
      }
      const data: GetDetailProductInterface = await response.json();
      setGetproductDetail(data);
      const combinedDateValue = `${data.createdAt} - ${data.updatedAt}`;
      setCombinedDate(combinedDateValue);
      setShowModalViewDetailProduct(true);
    } catch (error) {
      console.error("Error fetching category detail:", error);
    }
  };

  const imageSrc = "http://localhost:3000/product";

  return {
    product,
    getproductDetail,
    getProductByID,
    setShowModalViewDetailProduct,
    showModalViewDetailProduct,
    imageSrc,
    productId,
    combinedDate,
  };
}

export default VMGetProduct;
