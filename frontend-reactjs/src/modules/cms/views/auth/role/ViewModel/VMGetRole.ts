import axios from "axios";
import { useEffect, useState } from "react";
import {
  GetRoleAllInterface,
  GetRoleDetailInterface,
} from "../Interface/InterfaceRole";

function VMGetRole() {
  const [roles, setRoles] = useState<GetRoleAllInterface[]>([]);
  const [getRoleDetail, setGetRoleDetail] =
    useState<GetRoleDetailInterface | null>(null);
  const [roleId, setRoleId] = useState<number | null>(null);
  const [showModalViewDetailRole, setShowModalViewDetailRole] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/role/get");

        const formattedData = response.data.map((item: any) => ({
          ...item,
          createdAt: new Date(item.createdAt).toISOString(),
          updatedAt: new Date(item.updatedAt).toISOString(),
        }));

        setRoles(formattedData);
      } catch (error) {
        console.error("Error fetching roles :", error);
      }
    };

    fetchData();
  }, []);

  const getRoleByID = async (roleId: number) => {
    try {
      setRoleId(roleId);
      const response = await fetch(`http://localhost:3000/role/get/${roleId}`);

      if (!response.ok) {
        throw new Error("Failed to fetch role");
      }
      const data: {
        name: string;
        role_id: number;
        createdAt: string;
        updatedAt: string;
      } = await response.json();
      setGetRoleDetail(data);
      setShowModalViewDetailRole(true);
    } catch (error) {
      console.error("Error fetching role detail:", error);
    }
  };

  return {
    roles,
    setRoles,
    getRoleByID,
    showModalViewDetailRole,
    getRoleDetail,
    setShowModalViewDetailRole,
    roleId,
  };
}

export default VMGetRole;
