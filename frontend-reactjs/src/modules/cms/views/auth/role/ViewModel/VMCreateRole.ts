import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VMCreateRole() {
  const [formData, setFormData] = useState({ name: "", role_id: "" });
  const [showModalCreateRole, setShowModalCreateRole] = useState(false);

  const handleSubmitCreateRole = async (event) => {
    event.preventDefault();
    if (isNaN(Number(formData.role_id))) {
      toast.error("Role ID harus berupa angka");
      return;
    }

    const formDataToSend = {
      ...formData,
      role_id: Number(formData.role_id),
    };

    try {
      const response = await fetch("http://localhost:3000/role/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        setFormData({ name: "", role_id: "" });
        setShowModalCreateRole(false);
        toast.success("Role berhasil dibuat", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        if (responseData.message.includes("role_id already exists")) {
          toast.error(
            "role_id sudah ada. Silakan gunakan role_id yang berbeda."
          );
        } else {
          toast.error(
            "Role ID sudah digunakan. Silakan gunakan role_id yang berbeda."
          );
        }
      }
    } catch (error) {
      console.error("Kesalahan mengirim form:", error);
      toast.error("Terjadi kesalahan saat membuat Role");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return {
    handleSubmitCreateRole,
    showModalCreateRole,
    setShowModalCreateRole,
    handleInputChange,
    formData,
  };
}

export default VMCreateRole;
