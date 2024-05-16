import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function VMCreateRole() {
  const [formData, setFormData] = useState({ name: "" });
  const [showModalCreateRole, setShowModalCreateRole] = useState(false);

  const handleSubmitCreateRole = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/role/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "" });
        setShowModalCreateRole(false);
        toast.success("Role berhasil dibuat", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || "Gagal mengirim form");
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
