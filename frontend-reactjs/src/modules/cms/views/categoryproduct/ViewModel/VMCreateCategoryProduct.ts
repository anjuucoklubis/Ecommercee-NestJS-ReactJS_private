import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function VMCreateCategoryProduct() {
  const [formData, setFormData] = useState<{
    name: string;
    image: File | null;
  }>({
    name: "",
    image: null,
  });
  const [showModalCreateCategory, setShowModalCreateCateogry] =
    React.useState(false);

  const handleSubmitCreateCategoryProduct = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      if (formData.image) {
        formDataToSend.append("image", formData.image);
      } else {
        toast.error("Silakan unggah file gambar");
        return;
      }

      const response = await fetch(
        "http://localhost:3000/categoryproduct/create",
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      if (response.ok) {
        setFormData({
          name: "",
          image: null,
        });
        setShowModalCreateCateogry(false);
        toast.success("Kategori berhasil dibuat", {
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormData({ ...formData, image: file ?? null });
  };

  return {
    handleSubmitCreateCategoryProduct,
    showModalCreateCategory,
    setShowModalCreateCateogry,
    handleInputChange,
    handleImageChange,
    formData,
  };
}

export default VMCreateCategoryProduct;
