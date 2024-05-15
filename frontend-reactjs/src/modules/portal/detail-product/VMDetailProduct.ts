import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
interface ProductDetail {
    id: string;
    name: string;
    price: number;
    image: string;
    stock: string;
    description: string;
    category: {
      name: string;
    }
    // tambahkan properti lain sesuai kebutuhan
  }
function VMDetailProduct() {
    
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);
  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/product/get/${productId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product detail");
        }
        const data = await response.json();
        setProductDetail(data);
      } catch (error) {
        console.error("Error fetching product detail:", error);
      }
    };

    fetchProductDetail();

    return () => {
      // Cleanup if needed
    };
  }, [productId]);

  const imageSrc = "http://localhost:3000/product"
  return {
    productDetail,
    imageSrc
  };
}

export default VMDetailProduct;
