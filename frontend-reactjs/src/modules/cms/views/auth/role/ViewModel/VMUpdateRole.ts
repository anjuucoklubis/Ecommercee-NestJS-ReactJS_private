import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  FormDataUpdateRoleInterface,
  ShowModalRoleDetailForupdateInterface,
} from "../Interface/InterfaceRole";

function VMUpdateRole() {
  const [roleId, setRoleId] = useState<number | null>(null);
  const [showModalDetailRoleForUpdate, setShowModalDetailRoleForUpdate] =
    useState(false);
  const [roleDetail, setRoleDetail] =
    useState<ShowModalRoleDetailForupdateInterface | null>(null);
  const [formDataUpdate, setFormDataUpdate] =
    useState<FormDataUpdateRoleInterface>({
      name: "",
      role_id: 0,
    });

  const handleInputChangeUpdateRole = (event) => {
    const { name, value } = event.target;
    setFormDataUpdate({
      ...formDataUpdate,
      [name]: value,
    });
  };

  const handleShowModalDetailRoleForUpdate = async (roleId: number) => {
    try {
      setRoleId(roleId);
      const response = await fetch(`http://localhost:3000/role/get/${roleId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch role detail");
      }
      const data: { name: string; role_id: number } = await response.json();
      setRoleDetail(data);
      setShowModalDetailRoleForUpdate(true);
      setFormDataUpdate({
        name: data.name,
        role_id: data.role_id,
      });
    } catch (error) {
      console.error("Error fetching role detail:", error);
    }
  };

  const handleSubmitUpdateRole = async (event) => {
    event.preventDefault();
    try {
      if (isNaN(Number(formDataUpdate.role_id))) {
        toast.error("Role ID harus berupa angka");
        return;
      }

      const formDataToSend = {
        ...formDataUpdate,
        role_id: Number(formDataUpdate.role_id),
      };

      const response = await fetch(
        `http://localhost:3000/role/update/${roleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataToSend),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update role");
      }
      const updatedData = await response.json();
      if (
        updatedData &&
        updatedData.name &&
        updatedData.role_id !== formDataUpdate.name &&
        formDataUpdate.role_id
      ) {
        toast.success("Role berhasil diperbarui", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        toast.info("Tidak ada perubahan yang dilakukan");
      }
    } catch (error) {
      console.error("Error updating role:", error);
      toast.error("Role ID sudah digunakan");
    }
  };

  return {
    handleShowModalDetailRoleForUpdate,
    showModalDetailRoleForUpdate,
    setShowModalDetailRoleForUpdate,
    roleDetail,
    setRoleDetail,
    handleSubmitUpdateRole,
    formDataUpdate,
    setFormDataUpdate,
    handleInputChangeUpdateRole,
  };
}

export default VMUpdateRole;
