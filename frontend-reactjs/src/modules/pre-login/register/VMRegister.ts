import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FormDataRequestRegisterInterface } from "./RegisterInterface";

function VMRegister() {
  const [formData, setFormData] = useState<FormDataRequestRegisterInterface>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmitRegistration = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
      };
  
      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataToSend),
      });
  
      if (response.ok) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
        toast.success("Akun berhasil dibuat", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        if (responseData && responseData.message) {
          // Jika pesan adalah array, tampilkan setiap pesan
          if (Array.isArray(responseData.message)) {
            responseData.message.forEach((msg) => {
              toast.error(msg);
            });
          } else {
            toast.error(responseData.message);
          }
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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return {
    handleSubmitRegistration,
    handleInputChange,
    formData,
  };
}

export default VMRegister;
