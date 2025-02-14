import { useState } from "react";
import { toast } from "react-toastify";

function VMLogin() {
  const [formData, setFormData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    try {
      const formDataToSend = {
        email: formData.email,
        password: formData.password,
      };

      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      if (response.ok) {
        setFormData({
          email: "",
          password: "",
        });
        toast.success("Berhasil login", {
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
    handleSubmitLogin,
    handleInputChange,
    formData,
  };
}

export default VMLogin;
