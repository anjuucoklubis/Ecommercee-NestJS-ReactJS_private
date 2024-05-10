import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FormDataUpdateProductInterface,
  GetAllCategoryProductForUpdateProductInterface,
  GetDetailProductShowModalForUpdateInteface,
} from "../Interface/InterfaceProduct";
import axios from "axios";
function VMUpdateProduct() {
  const [productId, setProductId] = useState<number | null>(null);

  const [showModalDetailProductForUpdate, setShowModalDetailProductForUpdate] =
    React.useState(false);

  const [productDetailForUpdate, setProductDetailForUpdate] =
    useState<GetDetailProductShowModalForUpdateInteface | null>(null);

  const [formDataUpdate, setFormDataUpdate] =
    useState<FormDataUpdateProductInterface>({
      name: "",
      description: "",
      price: "",
      stock: "",
      image: null,
      categoryId: "",
    });

  const [getAllCategoryforUpdateProduct, setGetAllCategoryforUpdateProduct] =
    useState<GetAllCategoryProductForUpdateProductInterface[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChangeUpdateProduct = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormDataUpdate({
      ...formDataUpdate,
      [name]: value,
    });
  };

  const handleImageChangeUpdateProduct = (event) => {
    const file = event.target.files[0];
    setFormDataUpdate({
      ...formDataUpdate,
      image: file,
    });
  };

  const handleShowModalDetailCategoryForUpdate = async (productId: number) => {
    try {
      setProductId(productId);
      const response = await fetch(
        `http://localhost:3000/product/get/${productId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch category detail");
      }
      const data: {
        name: string;
        description: string;
        price: string;
        stock: string;
        category: {
          name: string;
        };
        image: string;
      } = await response.json();
      setProductDetailForUpdate(data);
      setShowModalDetailProductForUpdate(true);
      setFormDataUpdate({
        name: data.name,
        description: data.description,
        price: data.price,
        stock: data.stock,
        categoryId: data.category.name,
        image: null,
      });
    } catch (error) {
      console.error("Error fetching category detail:", error);
    }
  };

  const handleSubmitUpdateProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", formDataUpdate.name);
      formData.append("description", formDataUpdate.description);
      formData.append("price", formDataUpdate.price);
      formData.append("stock", formDataUpdate.stock);
      formData.append("categoryId", formDataUpdate.categoryId);
      if (formDataUpdate.image instanceof File) {
        formData.append("image", formDataUpdate.image);
      }

      const response = await fetch(
        `http://localhost:3000/product/update/${productId}`,
        {
          method: "PATCH",
          body: formData,
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Category updated successfully!");
        setShowModalDetailProductForUpdate(false);
        toast.success("Successfully updated", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        console.error("Failed to update category:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating category:", error);
    }
  };

  useEffect(() => {
    const fetchDataCategoryForUpdateProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/categoryproduct/get"
        );

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setGetAllCategoryforUpdateProduct(formattedData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchDataCategoryForUpdateProduct();
  }, []);

  const handleCategoryChangeForUpdate = (event) => {
    const categoryId = event.target.value;
    console.log(categoryId);
    setSelectedCategory(categoryId);
    setFormDataUpdate({
      ...formDataUpdate,
      categoryId: categoryId,
    });
  };

  return {
    handleShowModalDetailCategoryForUpdate,
    showModalDetailProductForUpdate,
    setShowModalDetailProductForUpdate,
    productDetailForUpdate,
    setProductDetailForUpdate,
    handleSubmitUpdateProduct,
    formDataUpdate,
    setFormDataUpdate,
    handleInputChangeUpdateProduct,
    handleImageChangeUpdateProduct,
    handleCategoryChangeForUpdate,
  };
}

export default VMUpdateProduct;
