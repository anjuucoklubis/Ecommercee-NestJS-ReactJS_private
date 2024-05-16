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
      const data: { name: string } = await response.json();
      setRoleDetail(data);
      setShowModalDetailRoleForUpdate(true);
      setFormDataUpdate({
        name: data.name,
      });
    } catch (error) {
      console.error("Error fetching role detail:", error);
    }
  };

  const handleSubmitUpdateRole = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3000/role/update/${roleId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataUpdate),
          credentials: "include",
        }
      );
      if (response.ok) {
        console.log("Role updated successfully!");
        setShowModalDetailRoleForUpdate(false);
        toast.success("Role berhasil diubah", {
          position: "top-right",
          onClose: () => {
            window.location.reload();
          },
        });
      } else {
        const responseData = await response.json();
        toast.error(responseData.message || "Failed to update Role");
        console.error("Failed to update Role:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating Role:", error);
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
