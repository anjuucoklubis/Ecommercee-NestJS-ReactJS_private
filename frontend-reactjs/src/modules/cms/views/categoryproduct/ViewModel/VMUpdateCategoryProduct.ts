import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FormDataUpdateCategoryProductInterface,
  ShowModalCategoryProductDetailInterface,
} from "../Interface/InterfaceCategoryProduct";

function VMUpdateCategoryProduct() {
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const [showModalDetailCategory, setShowModalDetailCategory] =
    React.useState(false);

  const [categoryDetail, setCategoryDetail] =
    useState<ShowModalCategoryProductDetailInterface | null>(null);

  const [formDataUpdate, setFormDataUpdate] =
    useState<FormDataUpdateCategoryProductInterface>({
      name: "",
      image: null,
    });

    const handleInputChangeUpdateCategory = (event) => {
      const { name, value } = event.target;
      setFormDataUpdate({
        ...formDataUpdate,
        [name]: value,
      });
    };
    

  const handleImageChangeUpdateCategoryProduct = (event) => {
    const file = event.target.files[0];
    setFormDataUpdate({
      ...formDataUpdate,
      image: file,
    });
  };

  const handleShowModalDetailCategory = async (categoryId: number) => {
    try {
      setCategoryId(categoryId);
      const response = await fetch(
        `http://localhost:3000/categoryproduct/get/${categoryId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch category detail");
      }
      const data: { name: string; image: string } = await response.json();
      setCategoryDetail(data);
      setShowModalDetailCategory(true);
      setFormDataUpdate({
        name: data.name,
        image: null,
      });
    } catch (error) {
      console.error("Error fetching category detail:", error);
    }
  };

  const handleSubmitUpdateCategoryProduct = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", formDataUpdate.name);
      if (formDataUpdate.image instanceof File) {
        formData.append("image", formDataUpdate.image);
      }

      const response = await fetch(
        `http://localhost:3000/categoryproduct/update/${categoryId}`,
        {
          method: "PATCH",
          body: formData,
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Category updated successfully!");
        setShowModalDetailCategory(false);
        toast.success("Kategori berhasil diubah", {
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

  return {
    handleShowModalDetailCategory,
    showModalDetailCategory,
    setShowModalDetailCategory,
    categoryDetail,
    setCategoryDetail,
    handleSubmitUpdateCategoryProduct,
    formDataUpdate,
    setFormDataUpdate,
    handleInputChangeUpdateCategory,
    handleImageChangeUpdateCategoryProduct,
  };
}

export default VMUpdateCategoryProduct;
