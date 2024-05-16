import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

function VMDeleteRole() {
  const [itemToDelete, setItemToDelete] = useState<number | null>(null);

  const handleRemoveItem = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3000/role/delete/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
      } else {
        console.error("Gagal menghapus Role:", response.statusText);
      }
    } catch (error) {
      console.error("Kesalahan menghapus Role:", error);
    }
  };

  const handleConfirmDelete = () => {
    if (itemToDelete !== null) {
      handleRemoveItem(itemToDelete);
      setItemToDelete(null);
      toast.success("Role berhasil dihapus", {
        position: "top-right",
        onClose: () => {
          window.location.reload();
        },
      });
    }
  };

  const handleCancelDelete = () => {
    setItemToDelete(null);
  };

  return {
    handleConfirmDelete,
    handleCancelDelete,
    itemToDelete,
    setItemToDelete,
  };
}

export default VMDeleteRole;
