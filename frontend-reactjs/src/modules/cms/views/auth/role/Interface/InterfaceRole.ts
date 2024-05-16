export interface GetRoleAllInterface {
  id: number;
  name: string;
  role_id : number;
  createdAt: string;
  updatedAt: string;
}

export interface GetRoleDetailInterface {
  name: string;
  role_id : number;
  createdAt: string;
  updatedAt: string;
}

export interface ShowModalRoleDetailForupdateInterface {
  name: string;
  role_id : number;
}

export interface FormDataUpdateRoleInterface {
  name: string;
  role_id : number;
}
