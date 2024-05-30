import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { GetAllCategoryProductForCreateProductInterface } from "../Interface/InterfaceProduct";
import axios from "axios";
import { useAxios } from "../../../../../guard/hook.js";

function VMCreateProduct() {
  const [formDataCreateProduct, setFormDataCreateProduct] = useState<{
    name: string;
    description: string;
    price: string;
    stock: string;
    categoryId: string;
    image: File | null;
  }>({
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });
  const [showModalCreateProduct, setShowModalCreateProduct] =
    React.useState(false);

  const [getAllCategoryforCreateProduct, setGetAllCategoryforCreateProduct] =
    useState<GetAllCategoryProductForCreateProductInterface[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmitCreateProduct = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formDataCreateProduct.name);
      formDataToSend.append("description", formDataCreateProduct.description);
      formDataToSend.append("price", formDataCreateProduct.price);
      formDataToSend.append("stock", formDataCreateProduct.stock);
      formDataToSend.append("categoryId", formDataCreateProduct.categoryId);
      if (formDataCreateProduct.image) {
        formDataToSend.append("image", formDataCreateProduct.image);
      } else {
        toast.error("Please upload an image file");
        return;
      }

      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3000/product/create", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        setFormDataCreateProduct({
          name: "",
          description: "",
          price: "",
          stock: "",
          categoryId: "",
          image: null,
        });
        setShowModalCreateProduct(false);
        toast.success("Produk berhasil dibuat", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        if (responseData && responseData.message) {
          toast.error(responseData.message);
        } else {
          console.error("Failed to submit form:", response.statusText);
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormDataCreateProduct({
      ...formDataCreateProduct,
      [name]: value,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormDataCreateProduct({ ...formDataCreateProduct, image: file ?? null });
  };
  const axios = useAxios();

  useEffect(() => {
    const fetchDataCategoryForCreateProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/categoryproduct/get"
        );

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setGetAllCategoryforCreateProduct(formattedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchDataCategoryForCreateProduct();
  }, []);

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    console.log(categoryId);
    setSelectedCategory(categoryId);
    setFormDataCreateProduct({
      ...formDataCreateProduct,
      categoryId: categoryId,
    });
  };

  return {
    showModalCreateProduct,
    setShowModalCreateProduct,
    handleInputChange,
    handleImageChange,
    handleCategoryChange,
    formDataCreateProduct,
    getAllCategoryforCreateProduct,
    selectedCategory,
    handleSubmitCreateProduct,
  };
}

export default VMCreateProduct;
